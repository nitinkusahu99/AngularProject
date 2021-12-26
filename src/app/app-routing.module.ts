import { UserLoginComponent } from './modules/login/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './modules/registration/user-registration/user-registration.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"Login",
    loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule),
    component:UserLoginComponent
  },
  {
    path:'Registration',
    loadChildren:()=>import('./modules/registration/registration.module').then(m=>m.RegistrationModule),
    component:UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
