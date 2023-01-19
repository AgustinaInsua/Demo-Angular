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
      catchError(this.handleError)); 
  }

  post(url: string, body: any){
    return this.httpClient.post(url, body)
    .pipe(
      catchError(this.handleError)); 
  }

  put(url: string, body: any){
    return this.httpClient.put(url, body)
    .pipe(
      catchError(this.handleError)); 
  }

  delete(url: string, cuit: any){
    return this.httpClient.delete(url , cuit)
    .pipe(
      catchError(this.handleError)); 
  }

  
  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError(() => new Error ("Bad request"));
  }
}
