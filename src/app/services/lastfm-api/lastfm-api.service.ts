import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment.local';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Song } from './../../components/songs/songs';
import { MessageService } from '../messages/message.service';

const LAST_FM_API_KEY = environment["LAST_FM_API_KEY"];

@Injectable()
export class LastfmApiService {
  trackMatches: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
    // Log a LastfmApiService message with the MessageService
    private log(message: string) {
      this.messageService.add('LastfmApiService: ' + message);
    }

    private songsUrl = 'api/songs';

// Search for a track by track name. Returns track matches sorted by relevance.
// Example JSON URL:  /2.0/?method=track.search&track=Believe&api_key=YOUR_API_KEY&format=json

  // getTrackMatches(name: string): Observable<Song> {
  //   const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=LAST_FM_API_KEY&format=json`;
  //   return this.http.get<Song>(url)
  //   // .pipe(
  //   //   tap(_ => this.log(`fetched matching tracks name=${name}`)),
  //   //   catchError(this.handleError<Song>(`getTrackMatches name=${name}`))
  //   // );
  // }
  
  getTrackMatches(name: String) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${LAST_FM_API_KEY}&format=json`;
    // this.http.get(url).subscribe(res => console.log(res));
    this.http.get(url)
      .subscribe(res => {
        this.trackMatches = res;
        console.log("this.trackMatches: ", this.trackMatches);
      }, err => {
        console.log(err);
      });
  }

}
