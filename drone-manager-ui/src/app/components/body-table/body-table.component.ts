import {Component, OnInit} from '@angular/core';
import {Drone, DroneService} from '../../services/drone.service';

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.css']
})
export class BodyTableComponent implements OnInit {

  private drones: Drone[] = [];
  private dronesHeader = {id: 'Id', name: 'Name', logitude: 'Longitude', latitude: 'Latitude', flights: 'Flights', projects: 'Projects'};

  constructor(private droneService: DroneService) {
  }

  ngOnInit(): void {
    this.drones = this.droneService.getAllDrones();
  }
}
