import {Injectable} from '@angular/core';
import {distinct} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  private drones: Drone[] =
    [{
      droneId: 1,
      name: 'Drone 1',
      latitude: '123.45',
      longitude: '456.12',
      fights: 1500,
      projects: [
        {
          projectId: 1,
          name: 'Project 2'
        },
        {
          projectId: 2,
          name: 'Project 2'
        },
        {
          projectId: 8,
          name: 'Project 8'
        },
        {
          projectId: 9,
          name: 'Project 9'
        }
      ]
    },
      {
        droneId: 2,
        name: 'Drone 2',
        latitude: '4578.45',
        longitude: '9532.12',
        fights: 1522,
        projects: [
          {
            projectId: 3,
            name: 'Project 3'
          },
          {
            projectId: 4,
            name: 'Project 4'
          },
          {
            projectId: 5,
            name: 'Project 4'
          }
        ]
      },
      {
        droneId: 3,
        name: 'Drone 3',
        latitude: '5647.45',
        longitude: '8899.12',
        fights: 15,
        projects: [
          {
            projectId: 5,
            name: 'Project 5'
          }
        ]
      },
      {
        droneId: 4,
        name: 'Drone 4',
        latitude: '7824.45',
        longitude: '635.12',
        fights: 254,
        projects: [
          {
            projectId: 1,
            name: 'Project 3'
          },
          {
            projectId: 2,
            name: 'Project 4'
          },
          {
            projectId: 8,
            name: 'Project 8'
          }
        ]
      },
      {
        droneId: 5,
        name: 'Drone 5',
        latitude: '4521.45',
        longitude: '5789.12',
        fights: 1234,
        projects: [
          {
            projectId: 4,
            name: 'Project 4'
          },
          {
            projectId: 5,
            name: 'Project 5'
          },
          {
            projectId: 6,
            name: 'Project 6'
          },
          {
            projectId: 7,
            name: 'Project 7'
          },
          {
            projectId: 8,
            name: 'Project 8'
          }
        ]
      }
    ];

  constructor() {
    console.log('Init DroneService...');
  }

  public getAllDrones() {
    return this.drones;
  }

  getDroneById(id: number) {
    return this.drones.filter(f => f.droneId === id);
  }

  public getAllProjets() {
    const projects: Project[] = [];
    // fill
    for (const drone of this.drones) {
      for (const project of drone.projects) {
        projects.push(project);
      }
      // TODO to do distinct in project array
    }
    return projects;
  }

  getStadistics() {
    let fights = 0;
    let projects = 0;
    const pilot = 10; // TODO add pilots

    // count projects and flights
    for (const drone of this.drones) {
      fights += drone.fights;
      for (const project of drone.projects) {
        projects++;
      }
    }

    const stadistics = new Statistics();
    stadistics.flights = fights;
    stadistics.projects = projects;
    stadistics.pilots = pilot;

    return stadistics;
  }
}


export interface Drone {
  droneId: number;
  name: string;
  latitude: string;
  longitude: string;
  fights: number;
  projects: Project[];
}

export interface Project {
  projectId: number;
  name: string;
}

export class Statistics {
  flights: number;
  projects: number;
  pilots: number;
}
