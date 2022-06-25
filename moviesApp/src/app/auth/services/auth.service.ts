import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { AuthResponse, User } from '../interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private dbUrl: string = environment.dbUrl;
  private _user!: User;

  get user(){
    return { ...this._user }
  }


  constructor(private http: HttpClient) { }

  register(name: string, lastname: string, email : string, password : string ){

    const url = 'http://localhost:4000/api/auth/register';
    const body = { name, lastname, email, password};

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( ({ ok, token }) => {
        if ( ok ) {
          localStorage.setItem('token', token! );
        }
      }),
      map( resp => resp.ok ),
      catchError( err => of(err) )
    );
  }



  login(email : string , password : string ) {

    const url = `${this.dbUrl}/auth`;
    const body = { email , password }

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( resp =>{
          if(resp.ok){
            localStorage.setItem('token', resp.token!)
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        } ),
        map( valid => valid.ok ),
        catchError( err => of(err)
        ) )
  }


  validateToken() : Observable<boolean>{
    const url = `${this.dbUrl}/auth/renew`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map(resp => {

            localStorage.setItem('token', resp.token!)
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
            return resp.ok
          }),
          catchError(err => of(false))
        )
  }


  logout(){
    localStorage.clear();
  }

  

}
