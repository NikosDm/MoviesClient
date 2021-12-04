import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
  apiKey = environment.apiKey;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cloneReq = request.clone({
      params: request.params.set('api_key', this.apiKey),
    });
    return next.handle(cloneReq);
  }
}
