import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { InspectionService } from 'src/app/services/inspection/inspection.service';
import { MenuItem, Message, MessageService } from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { CompanyService } from 'src/app/services/company-service/company.service';
import { EmployeeService } from 'src/app/services/employee-service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService,DialogService],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmployeeComponent implements OnInit {

  i: any;
  employees!: Employee[];
  personalInformation: any;
  items!: MenuItem[];
  submitted: boolean = false;
  displayBasic!: boolean;
  ref!: DynamicDialogRef;
  selectedEmployee!: Employee;
  positions: any;
  selectedPosition: any;
  displayEdit!: boolean;

  constructor(
    private router: Router,
    private inspectionService: InspectionService,
    private employeeService: EmployeeService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {

    //this.employee = new Employee();
    this.personalInformation = this.inspectionService.getEmployeesInformation();
    this.employees = new Array<Employee>();
    this.positions = this.employeeService.getPositionByCompany();
    //this.personalInformation.cuit = null;
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.employeeService.updateEmployee(employee);
    console.log(this.selectedEmployee);
  }


  deleteEmployeeByID(index: number) {
    if (this.indexValid(index)) {
      this.employees.splice(index, 1);
    }
  }
  show() {
    this.ref = this.dialogService.open(Employee, {
        header: 'Choose a Product',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

    this.ref.onClose.subscribe((employee: Employee) =>{
        if (employee) {
            this.messageService.add({severity:'info', summary: 'Product Selected', detail: employee.name});
        }
    });
  }
  deleteEmployeeInModal() {
   this.deleteEmployee(this.selectedEmployee);
   this.displayBasic = false;
  }

  deleteEmployee(employee: Employee) {
    this.employees = this.employees.filter((em) => em !== employee);
  }

  indexValid(index: number) {
    return index >= 0 && index < this.employees.length;
  }
  
  showBasicDialog(i: string) {
    let indice = parseInt(i);
    this.displayBasic = true;
    this.onSelect(this.employees[indice]);
    console.log(this.employees[indice]);
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
     this.personalInformation.name == undefined  ||
      this.personalInformation.surname == undefined /*||
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
      console.log(this.i);
      this.personalInformation.name = '';
      this.personalInformation.surname = '';
      this.personalInformation.cuit = '';
      this.personalInformation.dateOfBirth = '';
      this.personalInformation.position = '';
      this.personalInformation.startDate = '';
      this.personalInformation.businessHours = '';
    }
  }

}
