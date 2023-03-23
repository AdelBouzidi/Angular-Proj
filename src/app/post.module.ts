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
            {path: 'posts', component: PostsComponent, canActivate: [AuthGuard] }, 
        ]), // derna hakda bla mancriyou module de routing séparé lel post
        
    ]
})
export class PostModule{

}