import { inject, Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'
import { UserModel } from './user-auth/log-in/user.model';
import { RegistrationModel } from './user-auth/registration/registration.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logInUrl="http://50.19.24.41/api/auth/login";
  private registerUrl="http://50.19.24.41/api/auth/signup";
  private songsUrl="http://50.19.24.41/api/song/songs-list";
  
  
  


  constructor(private http:HttpClient,private toaster:ToastrService,private router:Router) { }
 
  register(user:RegistrationModel){
    const httpHeaders=new HttpHeaders({
      "client-Id":"437920819fa89d19abe380073d28839c",
      "client-Secret":"28649120bdf32812f433f428b15ab1a1"
    });
    return this.http.post(this.registerUrl,user,{headers:httpHeaders});
  }
  login(credentials:UserModel){
    const httpHeaders=new HttpHeaders({
      "client-Id":"437920819fa89d19abe380073d28839c",
      "client-Secret":"28649120bdf32812f433f428b15ab1a1"
    });
    return this.http.post(this.logInUrl,credentials,{headers:httpHeaders});
  }

  getSongs(
    bandId:number,
    search:string,
    currentPage:number,
    perPage:number
  ){
     const parameters=new HttpParams().set('bandId',bandId)
                                  .set('search',search)
                                  .set('currentPage',currentPage.toString())
                                  .set('perPage',perPage.toString());
      return this.http.get(this.songsUrl,{ params: parameters});
    }
  }

