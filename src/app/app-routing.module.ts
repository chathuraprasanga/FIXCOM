import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },{
    path:"signup",
    component:SignupComponent
  },{
    path:"forgot-password",
    component:ForgotPasswordComponent
  },{
    path:'dashboard',
    component:DashboardComponent
     
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
