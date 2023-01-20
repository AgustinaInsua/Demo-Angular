import { Company } from './../model/Company';
import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CompanyService } from '../services/company-service/company.service';
import { EmployeeService } from '../services/employee-service/employee.service';


@Component({
  selector: 'app-testing-api-generic',
  templateUrl: './testing-api-generic.component.html',
  styleUrls: ['./testing-api-generic.component.css']
})
export class TestingApiGenericComponent implements OnInit {
  urlGetCompanies : any;
  urlGetEmployees : any; 
  employee = new Employee();
  company = new Company();
  constructor(private apiService: ApiService,
    private messageService: MessageService,private companyService: CompanyService,
    private employeeService: EmployeeService) {} 

  ngOnInit(): void {
    this.urlGetCompanies = this.companyService.apiURL;
    this.urlGetEmployees = this.employeeService.apiURL;
  }

  get(url:string){
    this.returnResponse(this.apiService.get(url));
  }

  post(url:string, body: any){
    this.returnResponse(this.apiService.post(url,body));
  }

  delete(url:string, cuit: any){
    this.returnResponse(this.apiService.delete(url+ "/" +cuit,cuit));
  }

  put(url:string, body: any){
    this.returnResponse(this.apiService.put(url,body));
  }

  returnResponse(obs: Observable<any>){
    obs.subscribe( {next: (response: any) => {   
      console.log(response);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, key:'mainToast', life:2000});
    }
   })
  }


}
