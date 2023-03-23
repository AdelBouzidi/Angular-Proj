import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { AuthGuard } from "./services/guardes/auth.guard";
import { DeactivateGuardService } from "./services/guardes/deactivat-guard.service";
import { userResolveService } from "./services/resolvers/user-resolve.service";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";
const userRoutes: Routes =[ 
    {path: 'users', 
    component: UsersComponent,
    // canActivate: [AuthGuardService],
    canActivate: [AuthGuard],
    children: [{path: ':id/:name', component: UserComponent},
    {path: ':id/:name/edit', component: EditUserComponent, 
    canDeactivate: [DeactivateGuardService],
    resolve: {user : userResolveService} 
  }],
    }, 
];  //Routes =[] : array of routes
@NgModule({
    imports: [
        // [RouterModule.forRoot(userRoutes)] loukan jina f main module of routing (app-routing-module.ts) ndirou hakda mais hna lala man9drouch nsta3mlou forRoot
        [RouterModule.forChild(userRoutes)]
    ],
    exports: [
        [RouterModule]
    ]
})
export class UserRoutingModule{

}