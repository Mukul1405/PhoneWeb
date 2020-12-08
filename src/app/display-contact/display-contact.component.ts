import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {

  constructor(private service:MyserviceService) { }
Contacts:any[]
email:any

  ngOnInit() {
    this.email = localStorage.getItem('email'); 
    console.log(this.email);
    this.service.getAllContact(this.email).subscribe(
     data=> {
        this.Contacts=data;
      }
    );
     
    
  }

}
