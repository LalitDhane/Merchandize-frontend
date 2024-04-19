import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetails } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  private userDetails!: UserDetails;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!localStorage.getItem('userDetails'))
      this.userDetails = JSON.parse(localStorage.getItem('userDetails') ?? '');
    if (!!this.userDetails && this.userDetails.isLoggedIn) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
