import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./Shared/loading-spinner/loading-spinner.component";

@NgModule({
    declarations:[
        AuthComponent,
        LoadingSpinnerComponent,
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'auth', component: AuthComponent},
        ])
    ]
})
export class AuthModule{

}