import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SongsManagementComponent } from './songs-management/songs-management.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { BandManagementComponent } from './band-management/band-management.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent,
    children:[
      {path:'songs',component:SongsManagementComponent},
      {path:'event',component:EventManagementComponent},
      {path:'band',component:BandManagementComponent},
      {path:'',redirectTo:'/dashboard/songs',pathMatch:'full'},
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
