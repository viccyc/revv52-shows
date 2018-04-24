import { Injectable } from '@angular/core';
import { Song } from '../../components/songs/songs';
import { SONGS } from '../../mock-songs';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SongService {

  constructor() { }

  // makes it asynchronous - returns an Observable that emits a single value, the array of mock songs when done 
  getSongs(): Observable<Song[]> {
    return of(SONGS);
  }
}
