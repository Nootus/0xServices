import { Injectable }     from '@angular/core';
import { Route, CanLoad, CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  canLoad(route: Route) {
      //debugger;
    console.log('Auth Guard - Can Load');
    return false;
  }

  canActivate(){
      debugger;
      console.log('Auth Guard - Can Activate');
      return false;
  }
}