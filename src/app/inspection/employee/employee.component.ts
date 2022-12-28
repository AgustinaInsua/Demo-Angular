import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { InspectionService } from 'src/app/services/inspection/inspection.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!: Employee [];
  personalInformation: any;

    submitted: boolean = false;

    constructor(
      private router: Router,
      private inspectionService: InspectionService) { }

    ngOnInit() { 
        //this.employee = new Employee();
        this.personalInformation = this.inspectionService.getEmployeesInformation();
        this.employees = new Array <Employee>();
        //this.personalInformation.cuit = null;
    }

    prevPage(){
      this.router.navigate(['inspection/company']);
    }

    nextPage() {
      if(this.employees.length== 0){
        alert('Employees is empty');
      }else{
        this.inspectionService.setEmployeesInformation(this.employees);
        console.log(this.inspectionService.getConfirmationInformation());
        this.router.navigate(['inspection/confirmation']);
        this.submitted = true;
      }
      
      
    }

    addToEmployeeList(){
      let em : Employee = new Employee(this.personalInformation.name, this.personalInformation.surname,this.personalInformation.cuit, this.personalInformation.position);
        this.employees.push(em);
        console.log(this.employees);
        this.personalInformation.name = '';
        this.personalInformation.surname = '';
        this.personalInformation.cuit = '';
        this.personalInformation.position = '';
    }


}
