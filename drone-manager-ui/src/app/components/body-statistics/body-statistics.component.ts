import { Component, OnInit } from '@angular/core';
import {DroneService, Statistics} from '../../services/drone.service';

@Component({
  selector: 'app-body-statistics',
  templateUrl: './body-statistics.component.html',
  styleUrls: ['./body-statistics.component.css']
})
export class BodyStatisticsComponent implements OnInit {

  private stadistics: Statistics;

  constructor(private droneService: DroneService) { }

  ngOnInit() {
    this.stadistics = this.droneService.getStadistics();
  }

}
