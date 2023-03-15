import{HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable, tap } from "rxjs";
export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.headers);
        return next.handle(req).pipe(tap((event) =>{
            console.log(event);
            console.log('logging response from the interceptor');
            if(event.type === HttpEventType.Response){
                console.log(event.body); //hna nrecupirou response 
            }
        }));
    }
     
}