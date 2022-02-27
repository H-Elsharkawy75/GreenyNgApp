import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Slides } from '../Interfaces/Slide.Interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor( private http: HttpClient) { }


}
