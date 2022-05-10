import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authToken : string = 'DummyToken';
  constructor(
    public inj: Injector,
    private router: Router
  ) {}

  private applyCredentials = (req: HttpRequest<any>) => {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authToken}`
      }
    });
  };

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = this.applyCredentials(req);
    return next.handle(authReq).pipe(
      catchError(error => {
        if (error && +error.status === 401) {
            alert('credential not right!')
        }
        return throwError(error);
      })
    );
  }
}
