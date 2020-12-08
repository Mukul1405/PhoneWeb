import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import{HomeComponent} from './home/home.component';
import{AddContactComponent} from './add-contact/add-contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DisplayToDoComponent } from './display-to-do/display-to-do.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signIn',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'addContact',component:AddContactComponent},
  {path: 'displayContact',component:DisplayContactComponent},
  {path: 'addToDo',component:AddTodoComponent},
  {path :'displayTodo', component:DisplayToDoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
