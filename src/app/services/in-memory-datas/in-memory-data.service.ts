import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const songs = [
      { id: 11, name: 'Day Tripper' },
      { id: 12, name: 'Wake Me Up' },
      { id: 13, name: 'Walkin On Sunshine' },
      { id: 14, name: 'Lovely Day' },
      { id: 15, name: 'Don\'t Stop Me Now' },
      { id: 16, name: 'Logical Song' },
      { id: 17, name: 'Counting Stars' },
      { id: 18, name: 'Shower the People' },
      { id: 19, name: 'Bicycle Race' },
      { id: 20, name: 'Shape of You' },
      { id: 21, name: 'Faith' },
      { id: 22, name: 'Believer' },
      { id: 23, name: 'Superstition' }
    ];
    return {songs};
  }
}
