import { ForgetPasswordComponent } from './../../Components/Account/forget-password/forget-password.component';
import { RegisterComponent } from './../../Components/Account/register/register.component';
import { LoginComponent } from './../../Components/Account/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'Register', component:RegisterComponent},
  {path:'ForgetPassword', component:ForgetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
