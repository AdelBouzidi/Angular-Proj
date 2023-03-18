import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { AuthService } from "../services/auth.service";

@Component({
    selector : 'App-Navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit{
    isAuthenticated =false;

    constructor(private authService: AuthService){
    }
    ngOnInit(): void {
        this.authService.userSub.subscribe(user=>{
            // console.log(user);
            this.isAuthenticated= user ? true: false; 
        })
    }

}