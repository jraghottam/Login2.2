import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
 
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor( private router: Router,) { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.getSettings("jwtToken");
    console.log(token)
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq).pipe(catchError((error, caught) => {
      //intercept the respons error and displace it to the console
 
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    // if (err.status === 401) {
    //   // this.spinner.stop()
    //   this.snackbar.open("Full authentication is required to access this resource", "OK", {
    //     duration: 5000,
    //   });
    //   localStorage.clear();
    //   this.router.navigate(['/session/login']);
    //   return of(err.message);
    // } else if (err.status === 0) {
    //   this.spinner.stop()
    //   this.snackbar.open("Please Check your connection", "OK", {
    //     duration: 5000,
    //   });
    // } else if (err.status === 404) {
    //   this.spinner.stop()
    //   this.snackbar.open("Please Check your connection", "OK", {
    //     duration: 5000,
    //   });
    // }
    throw err;
  }
  public getSettings(key: string) {
 
    return localStorage.getItem(key);
 
  }
}
 
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
];

