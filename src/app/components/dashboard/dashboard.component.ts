import { Component, OnInit } from '@angular/core';
import { Song } from '../songs/songs';
import { SongService } from '../../services/song/song.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs.slice(1, 5));
  }

}
