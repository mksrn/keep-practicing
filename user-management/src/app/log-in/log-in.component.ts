import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  admintoggle=true;
  email="";
  password="";
  constructor(private userDataService:UserDataService, private router: Router, private cd: ChangeDetectorRef) { }

  ontoggleadmin(admin){
    console.log(admin);
    this.admintoggle=admin;
    this.cd.detectChanges();
    console.log(this.admintoggle);
  }
  login(){
    var myemail=this.email;
    var pword=this.password;
    var uarray=this.userDataService.userdetails;
    for(var i=0; i<uarray.length; i++){
      if(myemail==uarray[i].email && pword==uarray[i].password){
        //login success..go to landing page
        console.log("log in success");
        this.router.navigate(['landing']);
      }
    }
  }
  register(){

  }
  ngOnInit() {
    var user=localStorage.getItem("userdetails");

    if(user== null || user.length==0){
      console.log()
//when data is not available in local storage
var userarray=[
  {
  name:"admin",
  mobile:9040876547,
  address:"whitefield",
  email:"admin@gmail.com",
  password:"password0",
  active:"Y",
  role:"Admin"
}

];
this.userDataService.userdetails=userarray;
    } else {
      //when data is available, copy it to local storage
      this.userDataService.userdetails=JSON.parse(user);
      
     
    }

  }

}
