import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { LogInComponent } from './user-auth/log-in/log-in.component';
import { RegistrationComponent } from './user-auth/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { MainContentComponent } from './dashboard/main-content/main-content.component';
import { SongsManagementComponent } from './dashboard/songs-management/songs-management.component';
import { EventManagementComponent } from './dashboard/event-management/event-management.component';
import { BandManagementComponent } from './dashboard/band-management/band-management.component';
import { DropdownModule } from 'primeng/dropdown';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
// import { ToggleButton} from 'primeng/togglebutton';
// import { ToggleButtonModule } from 'primeng/togglebutton';


@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    LogInComponent,
    RegistrationComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    MainContentComponent,
    SongsManagementComponent,
    EventManagementComponent,
    BandManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    InputSwitchModule,
    // ToggleButton,
    // ToggleButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorInterceptor,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
