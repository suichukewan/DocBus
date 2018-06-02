import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { LoginService } from '../../core/login/login.service'
import { Router } from '@angular/router';
import {Userinfo}  from  '../../core/userinfo/userinfo'
import { UserinfoService } from '../../core/userinfo/userinfo.service';
import localforage from '../../core/localforage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  accountName: string;
  password: string;
  isSavePassword: boolean;
  store = localforage.createInstance({
    name: "userinfo"
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userInfoService: UserinfoService,
    private toastCtrl: ToastController,
  ) { }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: '登录失败',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  async getUserinfo(){
   const userinfo = await this.store.getItem<Userinfo>('userinfo');

   if (userinfo !== undefined) {
    this.accountName = userinfo.accountName;
    this.password = userinfo.password;
    this.isSavePassword = userinfo.isSavePassword;
  }
  }

  signin() {
    this.loginService.login(this.accountName, this.password).subscribe({
      next: (login) => {
        if (login.success) {
          this.userInfoService.accountName = this.accountName;
          this.router.navigate(['/todo-list']);

          if (this.isSavePassword) {
            this.store.setItem<Userinfo>('userinfo', {
              accountName: this.accountName,
              password: this.password,
              isSavePassword: this.isSavePassword
            });
          }

        } else {
          this.showToast('middle');
        }
      },
      error: (err) => {
        debugger
        this.showToast('middle');
      }
    })
  }

  ngOnInit() {

  }
}
