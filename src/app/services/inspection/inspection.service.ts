import { ConfirmationComponent } from './../../inspection/confirmation/confirmation.component';
import { Injectable } from '@angular/core';
import { CompanyService } from '../company-service/company.service';
import { Company } from 'src/app/model/Company';
import { Employee } from 'src/app/model/Employee';

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
    private companyService: CompanyService
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
    let employees: Employee[] = this.confirmationInformation.employeeInformation;
    this.companyService.addCompany(new Company (this.confirmationInformation.companyInformation.name,
      this.confirmationInformation.companyInformation.razonSocial,
      this.confirmationInformation.companyInformation.cuit, employees
      ));

  }

}
