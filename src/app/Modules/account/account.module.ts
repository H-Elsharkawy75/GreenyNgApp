import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ForgetPasswordComponent } from 'src/app/Components/Account/forget-password/forget-password.component';
import { LoginComponent } from 'src/app/Components/Account/login/login.component';
import { RegisterComponent } from 'src/app/Components/Account/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
  ]
})
export class AccountModule { }
