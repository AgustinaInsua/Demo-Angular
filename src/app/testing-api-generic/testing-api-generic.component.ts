import { Company } from './../model/Company';
import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testing-api-generic',
  templateUrl: './testing-api-generic.component.html',
  styleUrls: ['./testing-api-generic.component.css']
})
export class TestingApiGenericComponent implements OnInit {
  urlGetCompanies = environment.apiURLCompany + 'companies';
  urlGetEmployees = environment.apiURLEmployee + 'employees';
  employee = new Employee();
  company = new Company();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }

  get(url:string){
    this.apiService.get(url).subscribe({
      next: (compas) => {   
        console.log(compas);
      },
      error: (response : any) =>{
        console.log(response.message);
        //this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        //this.statusDetail = 'error';
      }
    })
  }
  post(url:string, post: any){
    this.apiService.post(url,post).subscribe({
      next: (compas) => {   
        console.log(compas);
      },
      error: (response) =>{
        console.log(response.message);
        //this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        //this.statusDetail = 'error';
      }
    })
  }
}
