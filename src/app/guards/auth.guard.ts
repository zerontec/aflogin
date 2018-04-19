import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from '../servicios/auth.service';
import { Route } from '@angular/router/src/config';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(
private router: Router,
private afAuth: AngularFireAuth,
private authServices: AuthService

){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServices.afAuth.authState
    .take(1)
    .map(authState => !!authState)
    .do(authenticated => {
      if(!authenticated) {
        this.router.navigate(['/login']);
      }

    });
  }
}
