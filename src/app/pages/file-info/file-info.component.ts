import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ModalController} from 'ionic-angular';
import  {FileDetailsComponent}  from  '../file-details/file-details.component'

@Component({
  selector: 'app-file-info',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.less']
})
export class FileInfoComponent implements OnInit {

  location: Location;

  constructor(location: Location,public modalCtrl: ModalController) {
    this.location = location;
  }

  openFileDetailsModal() {

    let modal = this.modalCtrl.create(FileDetailsComponent);
    modal.present();
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
