import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Sending Request interceptor');
        let modifiedRequest = req.clone({
            // url: 'we can change the url like this'
            headers: req.headers.append('auth','abc')
        });
        return next.handle(modifiedRequest);
    }

}