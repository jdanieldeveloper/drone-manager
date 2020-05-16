import {Component, Input, OnInit} from '@angular/core';
import {Drone, DroneService} from '../../services/drone.service';

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.css']
})
export class BodyTableComponent implements OnInit {

  drones: Drone[] = [];
  dronesHeader = {id: 'Id', name: 'Name', logitude: 'Longitude', latitude: 'Latitude', flights: 'Flights', projects: 'Projects'};

  droneFilteredId: number;

  constructor(private droneService: DroneService) {
  }

  ngOnInit(): void {
    this.drones = this.droneService.getAllDrones();
  }

  findDronesById(droneId: number) {
    return this.drones = this.droneService.getDroneById(droneId);
  }

  @Input()
  set droneId(droneId: number) {
    this.droneFilteredId = droneId;

    // change state of the drones table
    this.drones = this.findDronesById(this.droneFilteredId);
  }

  get droneId(): number {
    return this.droneFilteredId;
  }
}
