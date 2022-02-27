import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryHome } from 'src/app/Interfaces/CategoryHome.interface';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryHomeService {

  Api_url= env.ApiUrl;
  constructor(private http: HttpClient) { }

  getCategoryApi(): Observable<CategoryHome[]> {
    return this.http.get<CategoryHome[]>(this.Api_url + '/CategoryHome.json').pipe(
      catchError(
        (error) =>{
          return throwError(error.message || "Category Api Not Response");
        }
      )
    )
  }

  GetCategoryOnly(CategiryID:any):Observable<CategoryHome[]>{
    return this.http.get<CategoryHome[]>(this.Api_url + `/Catgorys/${CategiryID}.json`).pipe(
      catchError(
        (error) => {
          return throwError(error.message || "Category API Not Response");
        }
      )
    )
  }
}
