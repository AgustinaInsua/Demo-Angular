import { Company } from './../../model/Company';
import { Injectable } from '@angular/core';
import { COMPANIES } from 'src/app/model/mock-companies';
import { Employee } from 'src/app/model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees!: Employee[];

  constructor() { }

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
    let position;
      for(let i=0; i<this.employees.length; i++) {
        position = this.employees[i].position;
       console.log(position);
      }
    return ["A", "B"];
  }

}
