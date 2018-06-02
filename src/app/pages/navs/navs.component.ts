import { Component, OnInit } from '@angular/core';
import {ProjectInfoComponent}  from  '../project-info/project-info.component'
import {ApplicationInfoComponent}  from  '../application-info/application-info.component'
import {ApprovalRecordComponent}  from  '../approval-record/approval-record.component'
import {FileInfoComponent}  from  '../file-info/file-info.component'

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.less']
})
export class NavsComponent implements OnInit {

  fileInfo:any;
  projectInfo:any;
  applicationInfo:any;
  approvalRecord:any;

  constructor() {
    this.fileInfo=FileInfoComponent;
    this.projectInfo=ProjectInfoComponent;
    this.applicationInfo=ApplicationInfoComponent;
    this.approvalRecord=ApprovalRecordComponent;
  }

  ngOnInit() {
  }
}
