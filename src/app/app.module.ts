import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SmsComponent } from './sms/sms.component';
import { KontakComponent } from './kontak/kontak.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sms', component: SmsComponent},
  {path: 'kontak', component: KontakComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmsComponent,
    KontakComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
