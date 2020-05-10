import {Component, OnInit} from '@angular/core';
import {Drone, DroneService, Project} from '../../services/drone.service';

@Component({
  selector: 'app-header-filter',
  templateUrl: './body-filter.component.html',
  styleUrls: ['./body-filter.component.css']
})
export class BodyFilterComponent implements OnInit {

  private drones: Drone[] = [];
  private projects: Project[] = [];

  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.drones = this.droneService.getAllDrones();
    this.projects = this.droneService.getAllProjets();
  }
}
