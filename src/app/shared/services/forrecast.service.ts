import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Forrecast } from '../model/Forrecast';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8;'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ForrecastService {

  constructor(private http: HttpClient) { }
  public url: string = "https://api.weatherbit.io/v2.0/forecast/daily";
  public key: string ="371d4e84f04f4e6eafe38174f3de11e5";
  public getWeatherForrecast(city):Observable<Forrecast>{
    return this.http.get<Forrecast>(this.url+'?city='+city+'&key='+this.key,httpOption).pipe(map(res=>res), catchError(this.handleError));
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) { // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else { // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
