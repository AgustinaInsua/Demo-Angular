import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { Company } from 'src/app/model/Company';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private APIUrl= environment.apiURL + 'companies';
  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any[]> {
    return this.httpClient.get<any[]>(url)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.NotFound){
          return throwError(() => new Error ("No hay elementos"));

        }
        return throwError(() => new Error ('Ups algo salio mal'));
      })
    );
  }

  post(url: string, body: any){
    return this.httpClient.post(url, body)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.BadRequest){
          return throwError(() => new Error ("Bad request"));

        }
        return throwError(() => new Error ('Ups algo salio mal'));
      })
    );;
  }
}
