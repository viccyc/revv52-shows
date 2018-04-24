import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

import { SongService } from './services/song/song.service';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
