import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

export function DataInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.url.includes('/documentTypes') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: environment.documentTypes }));
  } else if (req.url.includes('/genders') && req.method === 'GET') {
    return of(new HttpResponse({ status: 200, body: environment.genders }));
  } else if (req.url.includes('/signup') && req.method === 'POST') {
    return of(new HttpResponse({ status: 200, body: {success: true} }));
  }
  return next(req);
}