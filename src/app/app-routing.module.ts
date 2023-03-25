import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FilterpipesComponent } from "./filterpipes/filterpipes.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostsComponent } from "./posts/posts.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { AuthGuard } from "./services/guardes/auth.guard";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { UserComponent } from "./user/user.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {page:1, search: 'leela'}}, //localhost;4200/
    {path: 'users', loadChildren: () => import('./user.module').then(m => m.UserModule)},
    {path: 'posts', loadChildren: () => import('./post.module').then(m => m.PostModule)},

   
  //   {path: 'users', 
  //   component: UsersComponent,
  //   // canActivate: [AuthGuardService],
  //   canActivate: [AuthGuard],
  //   children: [{path: ':id/:name', component: UserComponent},
  //   {path: ':id/:name/edit', component: EditUserComponent, 
  //   canDeactivate: [DeactivateGuardService],
  //   resolve: {user : userResolveService} 
  // }],
  //   },
    
  
    // {path: 'users/:id/:name', component:UserComponent},
    {path: 'categories', component: CategoriesComponent },
    {path: 'templateform', component: TemplateFormComponent },
    {path: 'reactiveform', component: ReactiveFormsComponent },
    // {path: 'filterpipes', component: FilterpipesComponent }, 
    // {path: 'posts', component: PostsComponent, canActivate: [AuthGuard] }, 
    {path: 'user', component: UserComponent},
    // {path: 'auth', component: AuthComponent},

    
    // { path: '**', pathMatch: 'full',
    // component: PageNotFoundComponent } ou bien
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: 'not-found' }, //hadi toujours tkoun lekhra kamel f routage tdirha lfou9 yasra mochkil mafhmtouch
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes) ], //imports: [RouterModule.forRoot(appRoutes, {useHash:true}) ] !!!!
    exports: [RouterModule],
})
export class AppRoutingModule{
}