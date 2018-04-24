import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './components/songs/songs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

// path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'songs', component: SongsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SongDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { 

}
