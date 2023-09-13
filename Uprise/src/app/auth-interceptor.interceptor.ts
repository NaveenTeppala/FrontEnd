import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest=request.clone(
      {
        setHeaders:{
          "client-Id":"437920819fa89d19abe380073d28839c",
          "client-Secret":"28649120bdf32812f433f428b15ab1a1",
          "Authorization":" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTExLCJlbWFpbCI6InRuYXZlZW4wMzAxMjAwMEBnbWFpbC5jb20iLCJpYXQiOjE2OTQ0MTg3NDEsImV4cCI6MzE3MjM4ODYxMTQxfQ.1FwkODJukmx3Bljdo8udtP_ktnkJUU7LCmOszVNi3D0"
        },
      }
    );
    return next.handle(modifiedRequest).pipe(
      retry(3),
      map((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse){

        }
        return event;
      }),
      catchError((error:HttpErrorResponse)=>{
        console.log(error);
        return throwError(error);
      })
      )
  }
}
