import { Injectable }     from '@angular/core';
import { Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivate, CanActivateChild }    from '@angular/router';
import { AuthService } from './AuthService';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

  constructor(private authService: AuthService){

  }

  canLoad(route: Route) {
    let url = `/${route.path}`;
    return this.authService.checkLogin(url);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.authService.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}