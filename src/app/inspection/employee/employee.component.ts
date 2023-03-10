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
  providers: [MessageService,DialogService]
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
  selectedCheckBox!:boolean;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private router: Router,
    private inspectionService: InspectionService,
    private employeeService: EmployeeService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.statusDetail = 'loading';
    //this.employee = new Employee();
    this.personalInformation = this.inspectionService.getEmployeesInformation();
    this.employees = new Array<Employee>();
    this.positions = this.employeeService.getPositionByCompany();
    //this.personalInformation.cuit = null;

    this.employeeService.getEmployeeByCompas(23232).subscribe({
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
  

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  selectCheckBox(){
    this.selectedCheckBox =true;
  }
  selectPosition(){
    console.log(this.selectedPosition);
  }

  deleteEmployeeByID(index: number) {
    if (this.indexValid(index)) {
      this.employees.splice(index, 1);
    }
  }

  deleteEmployeeInModal(i:string) {
  this.onSelect(this.employees[parseInt(i)]);
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
    this.displayBasic = true;
    this.onSelect(this.employees[parseInt(i)]);
    this.employeeService.updateEmployee(this.employees[parseInt(i)]);
    console.log(this.selectedEmployee);
    }

  prevPage() {
    this.router.navigate(['inspection/company']);
  }

  nextPage() {
    if (this.employees.length == 0) {
      this.messageService.add({
        severity: 'error',
        summary: "No hay Empleados",
        detail: 'Agregue aunque sea un empleado.',
      });
    } else {
      this.inspectionService.setEmployeesInformation(this.employees);
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
        summary: "Empleado incorrecto",
        detail: 'Complete los campos requeridos.',
        life: 2000,
      });
    } else {
      this.employees.push(em);

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
