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
      next: (response) => {   
        console.log(response);
      },
      error: (error) =>{
        console.log(error.message);
        //this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        //this.statusDetail = 'error';
      }
    })
  }
  post(url:string, body: any){
    this.apiService.post(url,body).subscribe({
      next: (response) => {   
        console.log(response);
      },
      error: (error) =>{
        console.log(error.message);
        //this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        //this.statusDetail = 'error';
      }
    })
  }

  delete(url:string, cuit: any){
    this.apiService.delete(url+ "/" +cuit,cuit).subscribe({
      next: (response) => {   
        console.log(response);
      },
      error: (error) =>{
        console.log(error.message);
        //this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        //this.statusDetail = 'error';
      }
    })
  }

  put(url:string, body: any){
    this.apiService.put(url,body).subscribe({
      next: (response) => {   
        console.log(response);
      },
      error: (error) =>{
        console.log(error.message);
        //this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        //this.statusDetail = 'error';
      }
    })
  }

}
