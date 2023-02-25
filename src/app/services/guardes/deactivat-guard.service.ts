import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


//before implementing this can deactivate we need to tell which component we are leaving
export interface IDeactivateGuard{
    canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}
export class DeactivateGuardService implements CanDeactivate<IDeactivateGuard>{
    canDeactivate(component: IDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canExit();
    }
     
}