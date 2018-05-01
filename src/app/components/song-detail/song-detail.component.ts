import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Song } from '../songs/songs';
import { SongService } from '../../services/song/song.service';
import { LastfmApiService } from '../../services/lastfm-api/lastfm-api.service';
import { isArray } from 'util';


@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  // @Input decorator to make the song property available for binding by the external SongComponent.
  // @Input()song: Song;
  @Input()song: any;
  trackMatches: any;
  trackInfo: any;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private lastfmApiService: LastfmApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSong();
  }

  getSong() {
    const id = +this.route.snapshot.paramMap.get('id');  //+ converts string to number
    this.songService.getSong(id)
      .map(song => {
        this.song = song;
      })
      .subscribe(song => {
        this.getTrackDetails();
      })
  }

  getTrackMatches() {
    this.lastfmApiService.getTrackMatches(this.song.name)
    .subscribe(matches => {
      this.trackMatches = matches;
    }, err => {
      console.log(err);
    });
  }

  getTrackInfo() {
    this.lastfmApiService.getTrackInfo("Lovely Day", "Bill Withers")
    .subscribe(info => {
      this.trackInfo = info;
    }, err => {
      console.log(err);
    });
  }
  
  getTrackDetails() {
    this.lastfmApiService.getTrackDetails(this.song.name)
    .subscribe(info => {
      this.trackInfo = info;
      this.song.url = this.trackInfo['track'].url;
      this.song.artist = this.trackInfo['track'].artist.name;
      // some of them don't have images so they get the default
      this.song.image = '../../assets/default_song.jpg';
      this.song.image = this.trackInfo['track'].album.image[3]['#text'];
      this.song.published = this.trackInfo['track'].wiki.published;
      this.song.album = this.trackInfo['track'].album.title;
    }, err => {
      console.log(err);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.songService.updateSong(this.song) 
      .subscribe(() => this.goBack());
  }
}
