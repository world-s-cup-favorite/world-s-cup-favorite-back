import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelcountires } from '../models/countries.model';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<Modelcountires>,
    next: HttpHandler
  ): Observable<HttpEvent<Modelcountires>> {
    console.log('paso por el interceptor');

    const headers = new HttpHeaders({
      name: 'beesoftLabs',
      capital: 'medellín',
      region: 'interest',
    });

    const reqClone = req.clone({
      headers,
    });
    return next.handle(reqClone);
  }
}
