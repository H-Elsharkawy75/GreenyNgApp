import { catchError, delay, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsInterface } from 'src/app/Interfaces/Products.interface';
import { environment as env } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsInterface } from 'src/app/Interfaces/ProductDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _URL= env.ApiUrl
  constructor(private http:HttpClient) { }

  GetProducts():Observable<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>(this._URL + '/Products.json').pipe(

      catchError(
        (err) =>{
          return throwError(err.message || "Product Not Found Api")
        }
      )
    )
  }

  GetProductDetails(id:number): Observable<ProductDetailsInterface[]>{
    return this.http.get<ProductDetailsInterface[]>(this._URL +`Products/${id}.json`).pipe(

      catchError(
        (err) => {
          return throwError(err.message || "Product Details Dont Com From Api")
        }
      )
    )
  }

}
