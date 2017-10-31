import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  private activated: boolean;
  constructor(private user: UserService, private router: Router) {
        this.activated = false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // this.router.navigate(['/']);
      if (this.user.getUserLoggedIn() !== true) {
        this.router.navigate(['/']);
        this.activated = false;
      }else { this.activated = true; }
    return this.activated;
  }
}
