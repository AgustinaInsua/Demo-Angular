import { Injectable } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { COMPANIES } from './../../model/mock-companies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanies(){
    return COMPANIES;
  }
  getCompa(): Observable<Company[]> {
    return this.http.get<Company[]>(environment.apiURL+'companies');
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
  }
}
