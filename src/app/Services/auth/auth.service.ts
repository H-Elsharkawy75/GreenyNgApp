import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorHandler } from './../../Shared/error-handler';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogedIn:boolean = true ;
  _URL = "https://heshamallam4edu.com/api/";
    private errorhandle: ErrorHandler = new ErrorHandler();
  constructor(private HTTP:HttpClient, private router:Router, private toaster:ToastrService) { }





  login(data: any): Observable<any> {
      return this.HTTP.post<any>(`${this._URL}Account/Login`, data , {withCredentials: true}).pipe(
        catchError(
          (eror) => {
            return throwError(eror.message || "Failed Response Authentication Login")
          }
        )
      );
  }

  Register(data: any): Observable<any> {
    return this.HTTP.post<any>(this._URL + 'Account/Register', data).pipe(
      catchError(
        (error) => {
          return throwError(error.message || "Failed Response Authentication Register");
        }
      )
    );
}

  userlogout(){
    localStorage.removeItem('Token');
    this.toaster.success('Logout Success');
    this.router.navigate(['/Account']);
  }

  getToken(){
    return localStorage.getItem('Token')
  }

  islogedin(): boolean {
    return !!localStorage.getItem('Token');
  }

}
