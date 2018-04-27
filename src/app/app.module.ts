import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-datas/in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SongSearchComponent } from './components/song-search/song-search.component';

import { SongService } from './services/song/song.service';
import { MessageService } from './services/messages/message.service';
import { LastfmApiService } from './services/lastfm-api/lastfm-api.service';
import { environment } from '../environments/environment.local';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SongSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 0, passThruUnknownUrl: true, dataEncapsulation: false}
    )
  ],
  providers: [
    SongService,
    MessageService,
    LastfmApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
