import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Song } from '../../components/songs/songs';

import { MessageService } from '../messages/message.service';

@Injectable()
export class SongService {

  // typical "service-in-service" scenario: you inject the MessageService into the SongService which is injected into the SongComponent.
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  // Log a SongService message with the MessageService
  private log(message: string) {
    this.messageService.add('SongService: ' + message);
  }

  private songsUrl = 'api/songs';

  // makes it asynchronous - returns an Observable that emits a single value, the array of mock songs when done 
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl)
  }

  getSong(id: number): Observable<Song> {
    // TODO: send the message _after_ fetching the song
    this.messageService.add(`SongService: fetched song id=${id}`);
    // return of(SONGS.find(song => song.id === id));
  }
}
