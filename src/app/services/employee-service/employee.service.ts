import { Company } from './../../model/Company';
import { Injectable } from '@angular/core';
import { COMPANIES } from 'src/app/model/mock-companies';
import { Employee } from 'src/app/model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    let employees: Employee[] = new Array <Employee>();
    COMPANIES.forEach(company => (company.employees?.forEach(
      employee => employees.push(employee)
    )));
    return employees;
  }
  getEmployeesByCompany(company :string){
    return COMPANIES.find(c => c.name == company)?.employees!;
  }

}
