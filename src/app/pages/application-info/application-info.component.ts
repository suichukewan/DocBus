import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-application-info',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.less']
})
export class ApplicationInfoComponent implements OnInit {

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
