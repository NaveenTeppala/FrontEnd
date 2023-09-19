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
  isDropdownOpen:boolean=false;
  options: { label: string; icon: string; value: string }[] = [
    { label: 'Log-Out', icon: 'pi pi-sign-out', value: 'logout' },
    { label: 'Change Password', icon: 'pi pi-key', value: 'change_password' },
    { label: 'Edit Profile', icon: 'pi pi-user', value: 'edit_profile' },
  ];
  showOverlay = false;
  
} 
