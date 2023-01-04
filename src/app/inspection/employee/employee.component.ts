import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { InspectionService } from 'src/app/services/inspection/inspection.service';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/services/company-service/company.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService],
})
export class EmployeeComponent implements OnInit {
  employees!: Employee[];
  personalInformation: any;
  items!: MenuItem[];
  submitted: boolean = false;
  displayBasic!: boolean;

  constructor(
    private router: Router,
    private inspectionService: InspectionService,
    private messageService: MessageService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.items =[
      {
          tooltip: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          tooltip: 'Delete',
          icon: 'pi pi-trash',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      }
  ];
    //this.employee = new Employee();
    this.personalInformation = this.inspectionService.getEmployeesInformation();
    this.employees = new Array<Employee>();
    //this.personalInformation.cuit = null;
  }
  showBasicDialog() {
    this.displayBasic = true;
}

  prevPage() {
    this.router.navigate(['inspection/company']);
  }

  nextPage() {
    if (this.employees.length == 0) {
      this.messageService.add({
        severity: 'error',
        detail: 'Employee is empty',
      });
    } else {
      this.inspectionService.setEmployeesInformation(this.employees);
      console.log(this.inspectionService.getConfirmationInformation());
      this.router.navigate(['inspection/confirmation']);
      this.submitted = true;
    }
  }

  addToEmployeeList() {
    let em: Employee = new Employee(
      this.personalInformation.name,
      this.personalInformation.surname,
      this.personalInformation.dateOfBirth,
      this.personalInformation.cuit,
      this.personalInformation.position,
      this.personalInformation.startDate,
      this.personalInformation.businessHours
    );
    if (
     this.personalInformation.name == undefined /* ||
      this.personalInformation.surname == undefined ||
      this.personalInformation.dateOfBirth == undefined ||
      this.personalInformation.cuit == undefined ||
      this.personalInformation.position == undefined ||
      this.personalInformation.startDate == undefined ||
      this.personalInformation.businessHours == undefined */
    ) {
      this.messageService.add({
        severity: 'error',
        detail: 'Plis complete the fields',
        life: 2000,
      });
    } else {
      this.employees.push(em);
      console.log(this.employees);
      this.personalInformation.name = '';
      this.personalInformation.surname = '';
      this.personalInformation.cuit = '';
      this.personalInformation.dateOfBirth = '';
      this.personalInformation.position = '';
      this.personalInformation.startDate = '';
      this.personalInformation.businessHours = '';
    }
  }

  deleteEmployeeByID(index: number) {
    if (this.indexValid(index)) {
      this.employees.splice(index, 1);
    }
  }

  deleteEmployee(employee: Employee) {
    this.employees = this.employees.filter((em) => em !== employee);
  }

  indexValid(index: number) {
    return index >= 0 && index < this.employees.length;
  }
}
