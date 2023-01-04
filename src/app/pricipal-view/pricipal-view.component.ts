import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-users';
import { Usuario } from './usuario';
import { User } from '../model/User';
import { CompanyService } from '../services/company-service/company.service';
import { Table } from 'primeng/table';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../services/employee-service/employee.service';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-pricipal-view',
  templateUrl: './pricipal-view.component.html',
  styleUrls: ['./pricipal-view.component.css']
})
export class PricipalViewComponent implements OnInit {
  searchValue!: string;
  searchValueEmployee!: string;
  users= USERS;
  model = new Usuario('', '', false, '');
  selectedUser!: User[];
  submitted= false;
  companies: any;
  employees:Employee[] = new Array <Employee>();
  filteredValue : any;
  
  constructor(
    private companyService: CompanyService,
    private employeeService :EmployeeService
  ) {}
  ngOnInit(): void {
     this.companies = this.companyService.getCompanies(); 

  }

  newHero(){
    this.model = new Usuario('','',false,'');
  }
  onSubmit(): void{
    this.submitted = true;
  }

  clear(table : Table){
    table.clear();
    this.filteredValue = null;
    this.searchValue = '';
  }

  clearEmployee(table : Table){
    table.clear();
    this.searchValueEmployee = '';
  }

  onFilter($event : any, dt: Table){
    this.filteredValue = dt.filteredValue[0];
    this.employees = this.employeeService.getEmployeesByCompany(this.filteredValue.name);
  }

  isCompanyFiltered(dt : Table): boolean{
    return !(this.filteredValue == null);
  }
}
