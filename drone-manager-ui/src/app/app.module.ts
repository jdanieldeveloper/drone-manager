import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BodyFilterComponent } from './components/body-filter/body-filter.component';
import { BodyMapComponent } from './components/body-map/body-map.component';
import { BodyStatisticsComponent } from './components/body-statistics/body-statistics.component';
import { BodyTableComponent } from './components/body-table/body-table.component';
import { BodySidebarComponent } from './components/body-sidebar/body-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {DroneService} from './services/drone.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyFilterComponent,
    BodyMapComponent,
    BodyStatisticsComponent,
    BodyTableComponent,
    BodySidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    DroneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
