import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     name="";
     mobile="";
     address="";
     email="";
     password="";
     active="";
     role="";

  constructor(private userDataService:UserDataService, private router: Router) { }

  onregister(){
    
    var userobj={
      name:this.name,
      mobile:this.mobile,
      address:this.address,
      email:this.email,
      password:this.password,
      active:"Y",
      role:"User"
    };
    this.userDataService.userdetails.push(userobj);
    console.log(this.userDataService.userdetails);
    var user=localStorage.setItem("userdetails", JSON.stringify(this.userDataService.userdetails));
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
