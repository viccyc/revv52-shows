import { Component, OnInit } from '@angular/core';
import { Song } from '../songs/songs';
import { SongService } from '../../services/song/song.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardSongs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getDashboardSongs();
  }

  getDashboardSongs(): void {
    this.dashboardSongs = this.songService.getDashboardSongs()
  }

  addToDashboard(song): void {
    // this.songService.addToDashboard(song);
    console.log("dashboard component addToDashboard songs: ", this.songService.getSongs());
    // console.log("dashboard component addToDashboard song: ", song);
    // this.songs.push(song);
  }

  deleteFromDashboard(song, routerLink): void {
    console.log('routerLink: ', routerLink);
    routerLink.preventDefault();
    this.songService.deleteFromDashboard(song);
  }

}
