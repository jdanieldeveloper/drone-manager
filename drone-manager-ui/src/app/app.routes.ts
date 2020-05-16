import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DroneGridCardComponent} from './components/body-drone-grid-card/drone-grid-card.component';
import {HomeComponent} from './components/home/home.component';

export const AppRoutes = RouterModule.forRoot([
  {path: 'home', component: HomeComponent},
  {path: 'drones', component: DroneGridCardComponent},


  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]);
