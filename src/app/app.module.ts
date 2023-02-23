import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, //localhost;4200/
  {path: 'users', 
  component: UsersComponent,
  children: [{path: ':id/:name', component: UserComponent}]
  },
  // {path: 'users/:id/:name', component:UserComponent},
  {path: 'categories', component: CategoriesComponent},
  
  {path: 'user', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
