import { Injectable }     from '@angular/core';
import { Route, CanLoad, CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  canLoad(route: Route) {
      //debugger;
      //route.redirectTo
    console.log('Auth Guard - Can Load');
    return false;
  }
}