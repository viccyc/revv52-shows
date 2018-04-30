import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment.local';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';

import { Song } from './../../components/songs/songs';
import { MessageService } from '../messages/message.service';

const LAST_FM_API_KEY = environment["LAST_FM_API_KEY"];

@Injectable()
export class LastfmApiService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
    // Log a LastfmApiService message with the MessageService
    private log(message: string) {
      this.messageService.add('LastfmApiService: ' + message);
    }

  getTrackMatches(name: String) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${LAST_FM_API_KEY}&format=json`;
    return this.http.get(url)
  }

  getTrackInfo(name: String, artist: String) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LAST_FM_API_KEY}&artist=${artist}&track=${name}&format=json`;
    return this.http.get(url)
  }


}
