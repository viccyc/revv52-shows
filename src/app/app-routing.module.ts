import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './components/songs/songs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.
const routes: Routes = [
  { path: 'songs', component: SongsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { 

}
