import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateBtnComponent } from './components/update-btn/update-btn.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TokenInterceptorInterceptor} from './token-interceptor.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AgGridComponent,
    UpdateBtnComponent,
    DeleteBtnComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
