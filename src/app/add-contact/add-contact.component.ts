import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private service:MyserviceService) { }
  na=""
  ph=""


  name:any;
  phone:any;
  email:any;

  addContact()
  {
    this.na=this.name;
    this.ph=this.phone;
   this.email=localStorage.getItem('email');
    this.phone=this.phone.toString();
    this.service.addContact(this.name,this.phone,this.email).subscribe(
      data=>{
        console.log(data);
      }
    );
  }

  ngOnInit() {
  }

}
