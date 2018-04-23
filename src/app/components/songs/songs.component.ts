import { Component, OnInit } from '@angular/core';
import { Song } from './songs';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  song: Song = {
    id: 1,
    name: 'Believer'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
