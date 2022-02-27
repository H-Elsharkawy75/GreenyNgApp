import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../Services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Emaillogin:string = '';
  Passwordlogin:string = '';
  Rememberlogin:boolean = false;


  constructor(private AuthSer:AuthService,
    private toaster: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmitData(dataLogin:any){
    localStorage.setItem('Token', JSON.stringify(dataLogin))
    this.toaster.success('login Success');
    this.router.navigate(['/'])



    this.AuthSer.login(dataLogin).subscribe(
      // (respans) => {
      //   this.toaster.success('login Success')
      //   this.router.navigate(['/'])
      // },
      // (error) => {
      //   // this.toaster.error(error);
      //   console.log(dataLogin)
      //   this.router.navigate(['/'])
      // }
    );
  }

}
