import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Song } from '../songs/songs';
import { SongService } from '../../services/song/song.service';
import { LastfmApiService } from '../../services/lastfm-api/lastfm-api.service';


@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  // @Input decorator to make the song property available for binding by the external SongComponent.
  @Input()song: Song;

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
    const song = this.songService.getSong(id)
      .subscribe(song => this.song = song);
    console.log("song: ", this.song);
  }

  getTrackMatches(): void {
    // const tracks = this.lastfmApiService.getTrackMatches(this.song.name);
    const tracks = this.lastfmApiService.getTrackMatches('Believer');
    console.log("matching tracks: ", tracks);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.songService.updateSong(this.song) 
      .subscribe(() => this.goBack());
  }
}
