import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-users';
import { Usuario } from './usuario';
import { User } from '../model/User';
import { CompanyService } from '../services/company-service/company.service';


@Component({
  selector: 'app-pricipal-view',
  templateUrl: './pricipal-view.component.html',
  styleUrls: ['./pricipal-view.component.css']
})
export class PricipalViewComponent implements OnInit {
  users= USERS;
  model = new Usuario('', '', false, '');
  selectedUser!: User[];
  submitted= false;
  companies: any;
  
  constructor(
    private companyService: CompanyService
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

  
}
