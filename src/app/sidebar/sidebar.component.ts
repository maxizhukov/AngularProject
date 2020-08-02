import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output()
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public drawer: MatDrawer;

  // tslint:disable-next-line:typedef
  public ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
  }
}
