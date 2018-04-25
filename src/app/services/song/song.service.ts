import { Injectable } from '@angular/core';
import { Song } from '../../components/songs/songs';
import { SONGS } from '../../mock-songs';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from '../messages/message.service';

@Injectable()
export class SongService {

  // typical "service-in-service" scenario: you inject the MessageService into the SongService which is injected into the SongComponent.
  constructor(private messageService: MessageService) { 

  }
  // makes it asynchronous - returns an Observable that emits a single value, the array of mock songs when done 
  getSongs(): Observable<Song[]> {
    // TODO: send the message _after_ fetching the songs
    this.messageService.add('SongService: fetched songs');
    return of(SONGS);
  }

  getSong(id: number): Observable<Song> {
    // TODO: send the message _after_ fetching the song
    this.messageService.add(`SongService: fetched song id=${id}`);
    return of(SONGS.find(song => song.id === id));
  }
}
