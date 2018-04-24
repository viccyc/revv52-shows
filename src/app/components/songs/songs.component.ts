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

  // songs = SONGS;
  songs: Song[];

  selectedSong: Song;

  constructor(private songService: SongService) {

  }

  ngOnInit() {
    this.getSongs();
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  getSongs(): void {
    // assigns an array of songs to the component's songs property. (synchronous)
    // this.songs = this.songService.getSongs();

    // waits for the Observable to emit the array of songs.
    // Then passes the emitted array to the callback, which sets the component's songs property. (asynchronous)
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs);
  }
}
