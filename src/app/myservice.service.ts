import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  deleteTodo(email, id):Observable<any> {
    return this.http.delete(`http://localhost:8081/delete/email?email=${email}&id=${id}`)
  }
  displayToDo(email):Observable<any> {
    return this.http.get(`http://localhost:8081/displayTodo?email=${email}`);
  }
  addToDo(head, desc, email,id):Observable<any> {
   return this.http.get(`http://localhost:8081/addToDo/email?email=${email}&head=${head}&desc=${desc}&id=${id}`);
  }
  getAllContact(email):Observable<any> {
    return this.http.get(`http://localhost:8081/displayContact?email=${email}`);
  }
  addContact(name, phone,email):Observable<any> {
    return this.http.get(`http://localhost:8081/addContact/email?name=${name}&phone=${phone}&email=${email}`);
  }
  findEmailLogin(email):Observable<any>{
  return this.http.get(`http://localhost:8081/signin/email?email=${email}`);    
  }

  signUp(name,email,password):Observable<any> {
   return this.http.get(`http://localhost:8081/signup?name=${name}&email=${email}&password=${password}`);
  }


  constructor(private http:HttpClient) { }
}
