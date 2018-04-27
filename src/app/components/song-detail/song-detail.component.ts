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

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private lastfmApiService: LastfmApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSong();
    this.getTrackMatches();
  }

  getSong(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //+ converts string to number
    this.songService.getSong(id)
      .subscribe(song => this.song = song);
  }

  getTrackMatches(): void {
    this.lastfmApiService.getTrackMatches(this.song.name)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.songService.updateSong(this.song) 
      .subscribe(() => this.goBack());
  }
}
