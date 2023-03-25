import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { RouterModule } from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ShortenPipe } from "./Pipes/shorten.pipe";
import { DummyService } from "./services/dummy.service";
import { SharedModule } from "./shared.module";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

@NgModule({ //in order to convert this class in a module
    declarations: [
        UserComponent,
        EditUserComponent,
        UsersComponent,
    ], //derna f hada le module les component li nhtajuhom pour users thing, c_a_dire ki tcliki 3la users rah talga ldakhel user w edit user, donc ndirouhm m3a ba3d f module wahed
    imports: [
        // FormsModule, //parce que sta3malnaah f users bech derna ngModel
        // RouterModule, //parce f users on a utilisé routerOutlet // besah ki criyina module de routing séparé pour users enahiw ga3 hada RouterModule w ndirou f plastou module li criyinah
        UserRoutingModule,
        // CommonModule,
        SharedModule,
    ],
    providers: [
        DummyService,
    ]
    // exports: [
    //     UserComponent,
    //     EditUserComponent,
    //     UsersComponent,
    // ] 

}) 
export class UserModule{

}