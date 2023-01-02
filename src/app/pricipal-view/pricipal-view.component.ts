import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-users';
import { Usuario } from './usuario';
import { User } from '../model/User';
import { CompanyService } from '../services/company-service/company.service';
import { Table } from 'primeng/table';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../services/employee-service/employee.service';


@Component({
  selector: 'app-pricipal-view',
  templateUrl: './pricipal-view.component.html',
  styleUrls: ['./pricipal-view.component.css']
})
export class PricipalViewComponent implements OnInit {
  users= USERS;
  model = new Usuario('', '', false, '');
  selectedUser!: User[];
  submitted= false;
  companies: any;
  employees:Employee[] = new Array <Employee>();
  
  constructor(
    private companyService: CompanyService,
    private employeeService :EmployeeService
  ) {}
  ngOnInit(): void {
     this.companies = this.companyService.getCompanies(); 
     this.employees = this.employeeService.getEmployees();
     console.log(this.employees);
  }

  newHero(){
    this.model = new Usuario('','',false,'');
  }
  onSubmit(): void{
    this.submitted = true;
  }

  clear(table : Table){
    table.clear();
  }
}
