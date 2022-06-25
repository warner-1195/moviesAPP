import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor(private authService : AuthService, 
              private router : Router){

  }


  canLoad(): Observable <boolean> | boolean {

    return this.authService.validateToken()
        .pipe(
          tap(valid => {
            if(!valid){
              this.router.navigateByUrl('/auth')
            }
          })
        )
  }


  canActivate(): Observable <boolean> | boolean {
    
    return this.authService.validateToken()
        .pipe(
          tap(valid => {
            if(!valid){
              this.router.navigateByUrl('/auth')
            }
          })
        )
    
  }

}
