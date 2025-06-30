import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent, LoginComponent, RegistrationComponent, StudentComponent],
  imports: [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}