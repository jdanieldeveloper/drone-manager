import {Component, Input, OnInit} from '@angular/core';
import {DroneService, Statistics} from '../../services/drone.service';

@Component({
  selector: 'app-body-statistics',
  templateUrl: './body-statistics.component.html',
  styleUrls: ['./body-statistics.component.css']
})
export class BodyStatisticsComponent implements OnInit {

  statistics: Statistics;
  droneFilteredId: number;

  constructor(private droneService: DroneService) { }

  ngOnInit() {
    this.statistics = this.droneService.getStatistics();
  }

  getStatisticsByDroneId(droneId: number) {
    return this.droneService.getStatisticsByDroneId(droneId);
  }

  @Input()
  set droneId(droneId: number) {
    this.droneFilteredId = droneId;

    // change state of statistics
    this.statistics = this.getStatisticsByDroneId(this.droneFilteredId);
  }

  get droneId(): number {
    return this.droneFilteredId;
  }

}
