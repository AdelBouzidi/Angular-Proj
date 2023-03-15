import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Sending Request interceptor');
        //how we can modify the request : (8...12)
        console.log('request interceptor');
        let modifiedRequest = req.clone({
            // url: 'we can change the url like this'
            headers: req.headers.append('auth','abc')
        });
        return next.handle(modifiedRequest);  // handle it will go to the http requests, this return an observable, because it is an observable we can subscribe it here ok
        
    }

}//efter executing the authInterceptor we need to execute logging interceptor
