import { Injectable } from '@angular/core';
import { Song } from '../../components/songs/songs';
import { SONGS } from '../../mock-songs';

@Injectable()
export class SongService {

  constructor() { }

  getSongs(): Song[] {
    return SONGS;
  }
}
