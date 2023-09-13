import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';
import { GuardService } from 'src/app/guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userData:SharedDataService,private guardService:GuardService){}
  ngOnInit(): void {
  }
  user:any=this.userData.getData();

  LogOut(){
    console.log("start");
    this.guardService.logOut();
    console.log("end");
  }

}