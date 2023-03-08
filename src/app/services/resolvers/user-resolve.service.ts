import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

interface User{
    id: string;
    name: string;
}
@Injectable()
export class userResolveService implements Resolve<User>{ //we need to tell the type of data we are expecting to this resolve
   /**
    *
    */
   constructor(private  userService: UserService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        let id = route.params['id'];
        let details = this.userService.getUser(id); 
        return details;
    } 

}

// ce résolveur reteurn des données de type user 