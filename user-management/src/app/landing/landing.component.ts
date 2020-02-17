import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  alluserdetails;
  constructor(private userDataService:UserDataService) {
    
   }

  ngOnInit() {
    this.alluserdetails=this.userDataService.userdetails;
  }

}
