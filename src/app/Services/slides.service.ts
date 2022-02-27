import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Slides } from '../Interfaces/Slide.Interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  _URL= env.ApiUrl
  constructor(private http: HttpClient) { }
  getApiSlides(): Observable<Slides[]>{
    return this.http.get<Slides[]>(this._URL + '/Slides.json').pipe(
      catchError(
        (err) => {
          return throwError(err.message || "My Error Context");
        }
      )
    )
  }

}
