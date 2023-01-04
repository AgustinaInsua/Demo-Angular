import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';
import { InspectionService } from 'src/app/services/inspection/inspection.service';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})
export class TableEmployeeComponent implements OnInit {

  employees!: Employee[];

  constructor(private inspectionService: InspectionService,private router: Router) { }

  ngOnInit(): void {
    this.employees = this.inspectionService.getEmployeesInformation();
  }
  prevPage(){
    this.router.navigate(['inspection/confirmation']);
  }
}
