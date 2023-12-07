import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'agGrid', component:AgGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
