import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { AuthGuard } from "./services/guardes/auth.guard";

@NgModule({
    declarations:[
        PostsComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            // {path: 'posts', component: PostsComponent, canActivate: [AuthGuard] }, 
            {path: '', component: PostsComponent, canActivate: [AuthGuard] }, 
            //parce que derna Lazy Loading l hada el module donc vider le path hna parce que fapp-routing rana dayrin posts fel path
        ]), // derna hakda bla mancriyou module de routing séparé lel post
        
    ]
})
export class PostModule{

}