import { Employee } from './../../model/Employee';
import { ConfirmationComponent } from './../../inspection/confirmation/confirmation.component';
import { Injectable } from '@angular/core';
import { CompanyService } from '../company-service/company.service';
import { Company } from 'src/app/model/Company';
import { EmployeeService } from '../employee-service/employee.service';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  confirmationInformation = {
    companyInformation: {
      name: '',
      razonSocial: '',
      cuit: 0,
    },
    employeeInformation: []
  };

  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService
  ) { }

  getConfirmationInformation(){
    return this.confirmationInformation;
  }

  set setConfirmationInformation(confirmationInformation: any){
    this.confirmationInformation = confirmationInformation;
  }

  setCompanyInformation(companyInformation: any){
    this.confirmationInformation.companyInformation = companyInformation;
  }

  getCompanyInformation(){
    return this.confirmationInformation.companyInformation;
  }

  setEmployeesInformation(employeeInformation: any){
    this.confirmationInformation.employeeInformation = employeeInformation;
  }

  getEmployeesInformation(){
    return this.confirmationInformation.employeeInformation;
  }

  addCompany(){
    this.companyService.addCompany(new Company (this.confirmationInformation.companyInformation.name,
      this.confirmationInformation.companyInformation.razonSocial,
      this.confirmationInformation.companyInformation.cuit, this.confirmationInformation.employeeInformation
      ));
  }

  getCompanies (): Company[]{
    return this.companyService.getCompanies();
  }

  getEmployees(): Employee[]{
    return this.employeeService.getEmployees();
  }
}
