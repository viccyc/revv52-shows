import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Song } from '../../components/songs/songs';

import { MessageService } from '../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
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

  updateSong (song: Song): Observable<any> {
    return this.http.put(this.songsUrl, song, httpOptions).pipe(
      tap(_ => this.log(`updated song id=${song.id}`)),
      catchError(this.handleError<any>('updateSong'))
    );
  }

  addSong (song: Song): Observable<Song> {
    return this.http.post<Song>(this.songsUrl, song, httpOptions).pipe(
      tap((song: Song) => this.log(`added song w/ id=${song.id}`)),
      catchError(this.handleError<Song>('addsong'))
    );
  }

  deleteSong (song: Song | number): Observable<Song> {
    const id = typeof song === 'number' ? song : song.id;
    const url = `${this.songsUrl}/${id}`;

    return this.http.delete<Song>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted song id=${id}`)),
      catchError(this.handleError<Song>(`deletedSong`))
    );
  }

  searchSongs(term: string): Observable<Song[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Song[]>(`api/songs/?name=${term}`).pipe(
      tap(_ => this.log(`found songs matching "${term}"`)),
      catchError(this.handleError<Song[]>('searchSongs', []))
    );
  }

}
