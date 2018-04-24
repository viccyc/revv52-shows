import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../songs/songs';


@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  // @Input decorator to make the song property available for binding by the external SongComponent.
  @Input()song: Song;

  constructor() { }

  ngOnInit() {
  }

}
