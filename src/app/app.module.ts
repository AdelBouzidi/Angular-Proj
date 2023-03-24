import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' //http
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
// import { RouterModule, Routes } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertModalComponent } from './Shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './Shared/placeholder.directive';
import { UserModule } from './user.module';
import { PostModule } from './post.module';
import { AuthModule } from './auth.module';
import { FilterModule } from './filter.module';
import { CoreModule } from './core.module';

// const appRoutes: Routes = [
//   {path: '', component: HomeComponent}, //localhost;4200/
 
//   {path: 'users', 
//   component: UsersComponent,
//   children: [{path: ':id/:name', component: UserComponent},
//   {path: ':id/:name/edit', component: EditUserComponent}],
//   },

//   // {path: 'users/:id/:name', component:UserComponent},
//   {path: 'categories', component: CategoriesComponent},
  
//   {path: 'user', component: UserComponent},
  
//   // { path: '**', pathMatch: 'full',
//   // component: PageNotFoundComponent } ou bien
//   { path: 'not-found', component: PageNotFoundComponent},
//   { path: '**', redirectTo: 'not-found' }, //hadi toujours tkoun lekhra kamel f routage tdirha lfou9 yasra mochkil mafhmtouch
// ];
 
@NgModule({
  declarations: [ // we are mentioning here : components, custum directives, custum pipes
    AppComponent,
    HomeComponent,
    // UsersComponent,
    CategoriesComponent,
    // UserComponent,
    // EditUserComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    // FilterpipesComponent,
    // ShortenPipe,
    // FilterPipe,
    // PostsComponent,
    // AuthComponent,
    // LoadingSpinnerComponent,
    NavigationComponent,
    // AlertModalComponent, this component rana ndiroulha adding dynamicly b type script video 121. donc machi lazem 
    //tdiclariha hna , diclariha f entryComponent ltaht
    PlaceholderDirective,
  ],
  imports: [  //Définit la liste des dépendances du module. Il s'agit généralement de la liste des modules contenant les composants utilisés par les composants de la section declarations.
    BrowserModule, 
    CoreModule,
    UserModule,
    PostModule,
    AuthModule,
    FilterModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
  ],
  entryComponents: [AlertModalComponent],
  // providers: [
    // {provide: HTTP_INTERCEPTORS, 
    //   useClass: AuthInterceptorService, 
    //   multi: true }, //interceptor 1
    // {provide: HTTP_INTERCEPTORS, 
    //   useClass: LoggingInterceptorService, 
    //   multi: true }, //interceptor 2 (this interceptor will be executed after interceptor 1)
    // {provide: HTTP_INTERCEPTORS, 
    //   useClass: AuthTokenInterceptorService, 
    //   multi: true }, //interceptor 1
    // AuthService, 
    // AuthGuardService, 
    // DeactivateGuardService, 
    // userResolveService, 
    // UserService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }

