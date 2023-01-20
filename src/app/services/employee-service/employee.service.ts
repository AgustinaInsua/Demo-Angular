import { Company } from './../../model/Company';
import { Injectable } from '@angular/core';
import { COMPANIES } from 'src/app/model/mock-companies';
import { Employee } from 'src/app/model/Employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees!: Employee[];
  apiURL = environment.apiURLEmployee + 'employees';

  constructor(private http: HttpClient) { }

  getEmployeeByCompas(cuit : number): Observable<Employee> {
    return this.http.get<Employee>(environment.apiURLEmployee+'companies'+'/' + 'employee'+'/'+cuit)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.NotFound){
          return throwError(() => new Error ("No hay empleados"));

        }
        return throwError(() => new Error ('Ups algo salio mal'));
      })
    );
  }

  getEmployees(){
    let employees: Employee[] = new Array <Employee>();
    COMPANIES.forEach(company => (company.employees?.forEach(
      employee => employees.push(employee)
    )));
    return employees;
  }
  getEmployeesByCompany(company :string){
    this.employees = COMPANIES.find(c => c.name == company)?.employees!;
    return this.employees;
  }

  getPositionByCompany(){
    let positions: any[] = [];
    this.employees.forEach(em => positions.push(em.position));
    return positions;
  }

  updateEmployee(employee: Employee){
    for(let i=0; i<this.employees.length; i++) {
        this.employees[i] = employee;
        console.log(this.employees[i]);
    }
  }

}
