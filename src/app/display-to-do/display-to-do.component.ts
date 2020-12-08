import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-to-do',
  templateUrl: './display-to-do.component.html',
  styleUrls: ['./display-to-do.component.css']
})
export class DisplayToDoComponent implements OnInit {

  constructor(private service:MyserviceService,private route:Router) { }

  Todo:any[];
  email:any;

  ngOnInit() {
    this.email=localStorage.getItem('email');
   this.service.displayToDo(this.email).subscribe(
     data=>{
       if(data=="")
       {
         console.log("nothing");
       }
       else{ 
         this.Todo=data;
               console.log(data);
           }
     }
   );
  }

  delete(i,head)
  {

    console.log(head);
    this.Todo.splice(i,1);
    this.service.deleteTodo(this.email,i).subscribe(

    );
  }

}
