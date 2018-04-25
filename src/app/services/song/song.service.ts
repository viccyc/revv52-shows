import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

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
      .pipe(
        tap(songs => this.log(`fetched songs`)),
        catchError(this.handleError('getSongs', []))
      );
  }

  getSong(id: number): Observable<Song> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.get<Song>(url).pipe(
      tap(_ => this.log(`fetched song id=${id}`)),
      catchError(this.handleError<Song>(`getSong id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
