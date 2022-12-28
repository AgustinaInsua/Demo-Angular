import { COMPANIES } from './../../model/mock-companies';
import { Employee } from 'src/app/model/Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { InspectionService } from 'src/app/services/inspection/inspection.service';
import { CompanyService } from 'src/app/services/company-service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyInformation : any;
  companies: any;
  constructor(
              private router: Router,
              private inspectionService: InspectionService,
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyInformation = this.inspectionService.getCompanyInformation();
    this.companies = this.companyService.getCompanies();
  }

  nextPage(){
    this.inspectionService.setCompanyInformation(this.companyInformation);
    //this.inspectionService.confirmationInformation.companyInformation = this.companyInformation;
    this.router.navigate(['inspection/employee']);
  }

}
