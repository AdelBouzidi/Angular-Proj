import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

@NgModule({ //in order to convert this class in a module
    declarations: [
        UserComponent,
        EditUserComponent,
        UsersComponent,
    ], //derna f hada le module les component li nhtajuhom pour users thing, c_a_dire ki tcliki 3la users rah talga ldakhel user w edit user, donc ndirouhm m3a ba3d f module wahed
    imports: [
        FormsModule, //parce que sta3malnaah f users bech derna ngModel
        RouterModule, //parce f users on a utilisé routerOutlet
        CommonModule,
    ],
    exports: [
        UserComponent,
        EditUserComponent,
        UsersComponent,
    ]
}) 
export class UserModule{

}