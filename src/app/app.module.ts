import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { HighlightTextDirective } from './Directives/HighlightText.directive';
import { RendererHighlightDirective } from './Directives/renderer-highlight.directive';
import { alternateIfDirective } from './Directives/alternateIf.directive';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    UserComponent,
    HighlightTextDirective,
    RendererHighlightDirective,
    alternateIfDirective,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
