import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  @Input()song: Song;
  trackMatches: any;
  trackInfo: any;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private lastfmApiService: LastfmApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSong();;
    // this.getTrackMatches() ;
    // this.getTrackInfo();
    this.getTrackDetails();
  }
  
  getSong() {
    const id = +this.route.snapshot.paramMap.get('id');  //+ converts string to number
    this.songService.getSong(id)
    .subscribe(song => this.song = song);
  }

  getTrackMatches() {
    this.lastfmApiService.getTrackMatches(this.song.name)
    .subscribe(matches => {
      this.trackMatches = matches;
      console.log("getTrackMatches this.trackMatches: :", this.trackMatches);
    }, err => {
      console.log(err);
    });
  }

  getTrackInfo() {
    // this.lastfmApiService.getTrackInfo(this.trackMatches.name, this.trackMatches.artist)
    this.lastfmApiService.getTrackInfo("Lovely Day", "Bill Withers")
    .subscribe(info => {
      this.trackInfo = info;
      console.log("getTrackInfo this.trackInfo: :", this.trackInfo);
    }, err => {
      console.log(err);
    });
  }
  
  getTrackDetails() {
    this.lastfmApiService.getTrackDetails(this.song.name)
    .subscribe(info => {
      this.trackInfo = info;
      console.log("trackInfo : ", this.trackInfo);
      console.log("trackInfo : ", this.trackInfo['track'].url);
      console.log("trackInfo : ", this.trackInfo['track'].wiki.content);
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
