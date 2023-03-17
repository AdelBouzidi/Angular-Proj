import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
// export class AuthGuardService implements CanActivateC{
export class AuthGuardService implements CanActivate, CanActivateChild{

constructor(private authService: AuthService, private router: Router) {}
    // canActivatechild(
    //     route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //    let isLoggedIn = this.authService.isAuthenticated();
    //    if(isLoggedIn){
    //     return true;
    //    }else{
    //    console.log('You are not allowed to view this page. You are redirected to login Page')
    //     this.router.navigate(['/']);
    //     return false; //ana dertha
    //    }
    // }      kanet hakda 9bal manutilisiw promise
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated().then((data) => {
        if(data){
            return true;
        }else{
            this.router.navigate(['/']);
            return false;
        }
    });  
}


// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     return this.canActivate(route, state);
// } ou bien

canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return this.authService.isAuthenticated().then((data) => {
    //     if(data){
    //         return true;
    //     }else{
    //         this.router.navigate(['/']);
    //         return false;
    //     }
    // });  ou bien
    return this.canActivate(childRoute, state);
} 
}