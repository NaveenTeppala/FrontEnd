import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';
import { GuardService } from 'src/app/guard.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  implements OnInit{
  loginDetails: UserModel = new UserModel();
  storedDetails: any;
  rememberMe: boolean = false;
  

  constructor(private authService:AuthService,private toast:ToastrService,private router:Router,private sharedDataService:SharedDataService,private guardService:GuardService) {
    this.loadStoredData();
  }
  message:string="";
 ngOnInit(): void {
   
 }

 

  loadStoredData() {
     const storedData=localStorage.getItem('userData');
     if(storedData){
      this.storedDetails=JSON.parse(storedData);
      this.loginDetails.email=this.storedDetails.loginDetails.email;
      this.loginDetails.password=this.storedDetails.loginDetails.password;
      this.rememberMe=this.storedDetails.rememberMe;
     }
     else{
      this.storedDetails={
        loginDetails:{
          email:"",password:""
        },
        rememberMe:false
      };
     }
  }
onSubmit(){
   console.log(this.loginDetails);
   console.log(this.rememberMe);
   const dataToStore={
    loginDetails:this.loginDetails,
    rememberMe:this.rememberMe
   };
   this.authService.login(this.loginDetails).subscribe(
    (response:any)=>{
      this.toast.success(response.message);
      console.log(response);
      this.sharedDataService.setData(response.data.user.userName);
      const token=response.data.accessToken;
      this.guardService.setToken(token);
      this.router.navigate(['dashboard']);
      localStorage.setItem('bandId',response.data.user.bands[0].id);
      
    }
   ,(error:any)=>{
    console.log(error);
    this.toast.error(error.error.error);
  }
   );
   if(this.rememberMe){
    localStorage.setItem('userData',JSON.stringify(dataToStore));
   }
   else{
    localStorage.removeItem('userData');
   }
}

}