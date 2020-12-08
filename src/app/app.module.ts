import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent} from './home/home.component'
import { AddContactComponent} from './add-contact/add-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
// import { DisplayToDoComponent } from './display-to-do/display-to-do.component'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations/';
import { DisplayToDoComponent } from './display-to-do/display-to-do.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AddContactComponent,
    DisplayContactComponent,
    AddTodoComponent,
    DisplayToDoComponent,
    // DisplayToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
