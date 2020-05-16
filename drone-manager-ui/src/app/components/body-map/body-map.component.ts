import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body-map',
  templateUrl: './body-map.component.html',
  styleUrls: ['./body-map.component.css']
})
export class BodyMapComponent implements OnInit {

  droneFilteredId: number;

  constructor() {
  }

  ngOnInit() {
    this.droneFilteredId = 0; // the first picture
  }

  @Input()
  set droneId(droneId: number) {
    this.droneFilteredId = droneId;
  }

  get droneId(): number {
    return this.droneFilteredId;
  }
}
