import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('')) {
      const clone = req.clone({setHeaders: {'Content-Type': 'application/json'}});
      return next.handle(clone);
    }
    return next.handle(req);
  }
  constructor() { }
}
