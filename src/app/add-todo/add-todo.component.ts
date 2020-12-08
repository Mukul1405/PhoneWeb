import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private service:MyserviceService) { }

  he:any;
  des:any;

  head="";
  Desc="";
  email:any;
  Todo:any[];
  static i:number;
  i=0;


  todo()
  {
    this.head=this.he;
    this.Desc=this.des;
    this.email=localStorage.getItem('email');
    console.log(this.email);
    this.i++;
     this.service.addToDo(this.head,this.Desc,this.email,this.i).subscribe(
       data=>{
         this.Todo=data;
         console.log(this.Todo);
       }
     );
   
  }

  delete(index){
    this.Todo.splice(index,1);
  }

  ngOnInit() {
  }

}
