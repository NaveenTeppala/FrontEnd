import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private toaster:ToastrService,private router:Router) { }
  setToken(token:string){
    localStorage.setItem('accessToken',token);
  }
  isLoggedIn(){
    return !!localStorage.getItem('accessToken');
  }
  logOut(){
    localStorage.removeItem('accessToken');
    this.toaster.success("you have been logged out");
    this.router.navigate(['']);
  }
}
