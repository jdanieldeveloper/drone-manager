import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drone-manager-ui';

  public droneIdFiltered: number;

  public whenDroneIsSelected(e: any) {
    this.droneIdFiltered = e;
  }

}
