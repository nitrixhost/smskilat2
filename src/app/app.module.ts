import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SmsComponent } from './sms/sms.component';
import { KontakComponent } from './kontak/kontak.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sms', component: SmsComponent},
  {path: 'kontak', component: KontakComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmsComponent,
    KontakComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
