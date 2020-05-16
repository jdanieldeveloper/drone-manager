import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DroneGridCardComponent} from './components/drone-grid-card/drone-grid-card.component';

export const AppRoutes = RouterModule.forRoot([
  {path: 'home', component: AppComponent},
  {path: 'drones', component: DroneGridCardComponent}
  /*{path: '**', pathMatch: 'full', redirectTo: 'home'}*/
]);
