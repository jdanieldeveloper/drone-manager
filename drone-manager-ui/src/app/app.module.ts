import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import {AppRoutes} from './app.routes';

// components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSidebarComponent } from './components/header-sidebar/header-sidebar.component';
import { BodyFilterComponent } from './components/body-filter/body-filter.component';
import { BodyMapComponent } from './components/body-map/body-map.component';
import { BodyStatisticsComponent } from './components/body-statistics/body-statistics.component';
import { BodyTableComponent } from './components/body-table/body-table.component';
import { BodySidebarComponent } from './components/body-sidebar/body-sidebar.component';
import { DroneGridCardComponent } from './components/body-drone-grid-card/drone-grid-card.component';
import { FooterComponent } from './components/footer/footer.component';

// services
import {DroneService} from './services/drone.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSidebarComponent,
    BodyFilterComponent,
    BodyMapComponent,
    BodyStatisticsComponent,
    BodyTableComponent,
    BodySidebarComponent,
    FooterComponent,
    DroneGridCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [
    DroneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
