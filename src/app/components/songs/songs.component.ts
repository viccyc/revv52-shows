import { Component, OnInit } from '@angular/core';
import { Song } from './songs';
import { SONGS } from '../../mock-songs';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs = SONGS;

  constructor() { }

  ngOnInit() {
  }

}
