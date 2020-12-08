import { Component, OnInit } from '@angular/core';
// import{ MyServiceService} from ''
import { MyserviceService } from '../myservice.service';
  
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  em = ""
  pa = ""
  rpa = ""
  na=""
  email:any;
  password:any;
  rePassword:any;
  name:any;
  constructor( private service:MyserviceService) { }


  onClick(){
    this.email = this.em
    this.password = this.pa
    this.rePassword = this.rpa
    this.name=this.na
    this.service.signUp(this.na,this.email,this.password).subscribe(
      data=>{
        console.log(data);
        
      })
    

      
  }
  
  ngOnInit() {
  }

}

