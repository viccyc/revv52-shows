import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

import { SongService } from './services/song/song.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/messages/message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SongService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
