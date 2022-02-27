import { Router } from '@angular/router';
import { AuthService } from './../../../Services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private FB:FormBuilder,
    private HTTP:HttpClient,
    private router:Router,
    private toaster:ToastrService,
    private AuthSer:AuthService) {
    this.registerForm = this.FB.group({
      YourName: ['',[Validators.required]],
      YourEmail: ['',[Validators.required, Validators.email]],
      YourPassword:['',[Validators.required, Validators.minLength(6)]],
      ConfirmPassord:['',[Validators.required, Validators.minLength(6)]],
      AcceptAll:[false]
    })
  }

  get YourName(){
    return this.registerForm.get('YourName');
  }
  get YourEmail(){
    return this.registerForm.get('YourEmail');
  }
  get YourPassword(){
    return this.registerForm.get('YourPassword');
  }
  get ConfirmPassord(){
    return this.registerForm.get('ConfirmPassord');
  }
  get AcceptAll(){
    return this.registerForm.get('AcceptAll');
  }

  ngOnInit(): void {
  }

  DataRegister(data: any){
    this.AuthSer.Register(data).subscribe(
      (respons) => {
        this.toaster.success('register Complete');

        this.router.navigate(['/Account'])
      },
      (error) => {
        // this.toaster.error(error)
        this.router.navigate(['/Account'])

      }
    );


  }
}
