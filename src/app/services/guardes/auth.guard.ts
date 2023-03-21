import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // return this.authService.userSub.pipe(map(user => {
        //     this.router.navigate(['/auth']);
        //     return user ? true : false;
        // }),tap(auth => {
        //     this.router.navigate(['/auth']);
        // }));      Sinon ::::::

        return this.authService.userSub.pipe(take(1), map(user => {
           if(!user){
            this.router.navigate(['/auth']);
           }
           return true;
        }));
        
    }

}