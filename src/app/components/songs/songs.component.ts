import { Component, OnInit } from '@angular/core';
import { Song } from './songs';
// import { SONGS } from '../../mock-songs';
import { SongService } from '../../services/song/song.service';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: Song[];

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    // waits for the Observable to emit the array of songs.
    // Then passes the emitted array to the callback, which sets the component's songs property. (asynchronous)
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.songService.addSong({ name } as Song)
      .subscribe(song => {
        this.songs.push(song);
      });
  }
}
