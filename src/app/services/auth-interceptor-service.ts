import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Sending Request interceptor');
        //how we can modify the request : (8...12)
        let modifiedRequest = req.clone({
            // url: 'we can change the url like this'
            headers: req.headers.append('auth','abc')
        });
        return next.handle(modifiedRequest).  // handle it will go to the http requests, this return an observable, because it is an observable we can subscribe it here ok
        pipe(tap((event) =>{
            console.log(event);
            console.log('response from the interceptor');
            if(event.type === HttpEventType.Response){
                console.log(event.body); //hna nrecupirou response 
            }
        }));
    }

}