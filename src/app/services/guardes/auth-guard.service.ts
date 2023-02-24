import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{
constructor(private authService: AuthService, private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       let isLoggedIn = this.authService.isAuthenticated();
       if(isLoggedIn){
        return true;
       }else{
       console.log('You are not allowed to view this page. You are redirected to login Page')
        this.router.navigate(['/']);
        return false; //ana dertha
       }
    }

}