import { Component, OnInit } from '@angular/core';
// import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  em = ""
  pa = ""

  email:any;
  password:any;

  constructor(private route:Router,private service:MyserviceService) { }

  onClick(){
    this.email = this.em
    this.password = this.pa
    

    this.service.findEmailLogin(this.email).subscribe(data=>{
      console.log(data);

      if(data==null){
        alert("Wrong credentials")
      }
      else if(this.password != data.password){
        alert("Password is Wrong")
      }
      else{
        localStorage.setItem('email',this.email);
        this.route.navigateByUrl("home")
      }
      
    })

  }

  ngOnInit() {
    localStorage.setItem('email','');
  }

}
