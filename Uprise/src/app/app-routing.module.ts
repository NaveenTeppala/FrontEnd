
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './user-auth/log-in/log-in.component';
import { RegistrationComponent } from './user-auth/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:LogInComponent,pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
