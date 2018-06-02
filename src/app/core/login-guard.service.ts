import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserinfoService } from './userinfo/userinfo.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(
    private userInfoService: UserinfoService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userInfoService.accountName) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
