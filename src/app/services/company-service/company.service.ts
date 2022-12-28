import { Injectable } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { COMPANIES } from './../../model/mock-companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(){
    return COMPANIES;
  }

  getEmployeeByCompany(company: string){
    console.log(COMPANIES.filter(c => c.name == company));
  }

  addCompany(company: Company){
    console.log(company.name);
    if(typeof company.employees === "object"){
      console.log(company.employees[0].name);
      COMPANIES.push(company);
    }
    //COMPANIES.push({name: company.companyInformation.name, razonSocial: company.});
  }
}
