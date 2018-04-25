import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Song } from '../songs/songs';
import { SongService } from '../../services/song/song.service';


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
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSong();
  }

  getSong(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //+ converts string to number
    this.songService.getSong(id)
      .subscribe(song => this.song = song);
  }

  goBack(): void {
    this.location.back();
  }
}
