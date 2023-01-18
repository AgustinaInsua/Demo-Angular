import { COMPANIES } from './../../model/mock-companies';
import { Employee } from 'src/app/model/Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { InspectionService } from 'src/app/services/inspection/inspection.service';
import { CompanyService } from 'src/app/services/company-service/company.service';
import { Message, MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [],
})
export class CompanyComponent implements OnInit {
  companyInformation: any;
  companies: any;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  constructor(
    private router: Router,
    private inspectionService: InspectionService,
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.companyInformation = this.inspectionService.getCompanyInformation();
    this.companies = this.companyService.getCompanies();
    this.statusDetail = 'loading';
    /*
    this.companyService.getCompa().subscribe({
      next: (compas) => {   
        console.log(compas);
        this.statusDetail = 'success';
      },
      error: (response : any) =>{
        console.log(response);
        this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        this.statusDetail = 'error';
      }
    }
    );*/
    this.companyService.getCompas(1111).subscribe({
      next: (compas) => {   
        console.log(compas);
        this.statusDetail = 'success';
      },
      error: (response : any) =>{
        console.log(response);
        this.messageService.add({severity:'error', summary:'Error con compania', key:'mainToast',detail:'No hay companias', life:2000});
        this.statusDetail = 'error';
      }
    }
    );
  }

  nextPage() {
    if (
      this.companyInformation.name == '' ||
      this.companyInformation.razonSocial == '' ||
      this.companyInformation.cuit == ''
    ) {
      this.messageService.add({
        severity: 'error',
        summary: "Compañia invalida",
        detail: 'Ingrese los campos requeridos.',
        life: 2500,
      });
    } else {
      this.employeeService.getEmployeesByCompany(this.companyInformation.name);
      this.inspectionService.setCompanyInformation(this.companyInformation);
      this.inspectionService.confirmationInformation.companyInformation =
      this.companyInformation;
      this.router.navigate(['inspection/employee']);
    }
  }
}
