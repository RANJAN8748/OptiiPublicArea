import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private activated: boolean;
  constructor(private user: AuthService, private router: Router) {
        this.activated = false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.user.getUserLoggedIn() !== true) {
        this.router.navigate(['/login']);
        // this.activated = false;
      }else { this.activated = true; }
    return this.activated;
  }
}
