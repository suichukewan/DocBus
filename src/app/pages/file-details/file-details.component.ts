import { Component, OnInit } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.less']
})
export class FileDetailsComponent implements OnInit {
  character;
  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ngOnInit() {
  }
}
