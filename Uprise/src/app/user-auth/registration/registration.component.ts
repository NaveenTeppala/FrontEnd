import { Component } from '@angular/core';
import { RegistrationModel } from './registration.model';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerDetails: RegistrationModel = new RegistrationModel();
  terms:boolean=false;
  constructor(private authService: AuthService,private toast:ToastrService) { }

  


  onSubmit() {
    if(this.terms){
      console.log(this.registerDetails);
     this.authService.register(this.registerDetails).subscribe(
      (response:any)=>{
        console.log(response);
        this.toast.success(response.message);
      },(error)=>{
        this.toast.error(error.error.error);
      }
      )
      
     
     
    }
    
  }

}
