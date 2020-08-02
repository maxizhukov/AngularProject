import { Component } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AngularCourse';
  public drawer !: MatDrawer;

  // tslint:disable-next-line:typedef
  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
    // Promise.resolve().then(() =>);
  }
}
