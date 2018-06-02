import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApprovalRecord } from '../../core/approval-record/approval-record'

@Component({
  selector: 'app-approval-record',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './approval-record.component.html',
  styleUrls: ['./approval-record.component.less']
})
export class ApprovalRecordComponent implements OnInit {
  ApprovalRecordLists: ApprovalRecord[];
  location: Location;

  constructor(location: Location) {
    this.location = location;
    this.ApprovalRecordLists = [{
      name: '123',
      action: '发起流程',
      time: '2012/12/2'
    },
    {
      name: '123',
      action: '发起流程',
      time: '2012/12/2'
    }]
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
