import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brands } from 'src/app/Interfaces/Brands/Brands.interface';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BrandsPublicService {
  Api_url= env.ApiUrl;
  constructor(private Http:HttpClient, private Toaster:ToastrService) { }

  getBrandsApi(): Observable<Brands[]>{
    return this.Http.get<Brands[]>(this.Api_url + '/Brands/brands.json').pipe(
      catchError(
        (error) => {
          return throwError(error.message || "Brands Api Not Response Data")
        }
      )
    )
  }

  getBarndOnly(BrandId: any):Observable<Brands[]>{
    return this.Http.get<Brands[]>(this.Api_url + `/Brands/Brand${BrandId}.json`).pipe(
      catchError(
        (error) => {
          return throwError(error.message || "Brands Api Not Response Data")
        }
      )
    )
  }
}
