import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' //http
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
// import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guardes/auth-guard.service';
import { DeactivateGuardService } from './services/guardes/deactivat-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FilterpipesComponent } from './filterpipes/filterpipes.component';
import { ShortenPipe } from './Pipes/shorten.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { PostsComponent } from './posts/posts.component';
import { AuthInterceptorService } from './services/auth-interceptor-service';
import { LoggingInterceptorService } from './services/logging-interceptor-service';  
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { AlertModalComponent } from './Shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './Shared/placeholder.directive';

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
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    FilterpipesComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
    // AlertModalComponent, this component rana ndiroulha adding dynamicly b type script video 121. donc machi lazem tdiclariha hna , diclariha f entryComponent ltaht
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  entryComponents: [AlertModalComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true }, //interceptor 1
    {provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInterceptorService, 
      multi: true }, //interceptor 2 (this interceptor will be executed after interceptor 1)
    {provide: HTTP_INTERCEPTORS, 
      useClass: AuthTokenInterceptorService, 
      multi: true }, //interceptor 1
    AuthService, 
    AuthGuardService, 
    DeactivateGuardService, 
    userResolveService, 
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

