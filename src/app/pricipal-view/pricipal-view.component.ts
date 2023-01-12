import { Company } from './../model/Company';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { USERS } from '../model/mock-users';
import { Usuario } from './usuario';
import { User } from '../model/User';
import { CompanyService } from '../services/company-service/company.service';
import { Table } from 'primeng/table';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../services/employee-service/employee.service';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MessageService } from 'primeng/api';
import { InspectionService } from '../services/inspection/inspection.service';


@Component({
  selector: 'app-pricipal-view',
  templateUrl: './pricipal-view.component.html',
  styleUrls: ['./pricipal-view.component.css'],
  providers: []
})
export class PricipalViewComponent implements OnInit {
  searchValue!: string;
  searchValueEmployee!: string;
  users = USERS;
  model = new Usuario('', '', false, '');
  selectedUser!: User[];
  submitted = false;
  companies: any;
  employees: Employee[] = new Array<Employee>();
  filteredValue: any;
  exportColumns!: any[];
  items !: MenuItem [];
  textSearch!: string;
  textEmployeeSearch!: string;
  suggestionsCompanies!: string[] ;
  suggestionsEmployees!: string[] ;
  companyNames: string[] = [];
  employeeInfo!: string[];

  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private inspectionService: InspectionService
  ) { }
  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
    this.exportColumns = [
      { title: "Name", dataKey: "name" },
      { title: "Razon", dataKey: "razonSocial" },
      { title: "Cuit", dataKey: "cuit" }
    ];
    this.items = [
      {
          icon: 'pi pi-file-excel',
          command: () => {
              this.exportExcel();
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          },
      },
      {
        icon: 'pi pi-file-pdf',
        command: () => {
            this.exportPdf();
            this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        },
    }
  ];
  this.companyNames = this.getNames(this.inspectionService.getCompanies());
  }

  newHero() {
    this.model = new Usuario('', '', false, '');
  }
  onSubmit(): void {
    this.submitted = true;
  }

  clear(table: Table) {
    table.clear();
    this.filteredValue = null;
    this.searchValue = '';
    this.textSearch = '';
  }

  clearEmployee(table: Table) {
    table.clear();
    this.textEmployeeSearch = '';
  }

  onFilter($event: any, dt: Table) {
    this.filteredValue = dt.filteredValue[0];
    this.employees = this.employeeService.getEmployeesByCompany(this.filteredValue.name);
    this.employeeInfo = this.getDataEmployees(this.employees);
  }

  isCompanyFiltered(dt: Table): boolean {
    return !(this.filteredValue == null);
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.companies);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "companies");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  exportPdf() {
    const doc = new jsPDF('p', 'pt');
    autoTable(doc, {
      columns: this.exportColumns,
      body: this.companies,
      didDrawPage: (dataArg) => {
        doc.text('Companies PDF', dataArg.settings.margin.left, 10);
      }
    });
    doc.save('companies.pdf');
  }

  searchCompanies(event: any){
    this.suggestionsCompanies = this.companyNames.filter(el =>
      el.toLowerCase().indexOf(event.query.toLowerCase()) > -1
    )
    //this.suggestionsCompanies = [... new Set(this.suggestionsCompanies)]; // Por si las sugerencias no se deberian repetir, podriamos convertir a SET
  }

  searchEmployees(event: any){
    this.suggestionsEmployees = this.employeeInfo.filter(el =>
      el.toLowerCase().indexOf(event.query.toLowerCase()) > -1
    )
    //this.suggestionsEmployees = [... new Set(this.suggestionsEmployees)]; // Por si las sugerencias no se deberian repetir, podriamos convertir a SET
  }
  
  getNames(object: any[]): string[]{
    let names: string[] = [];
    object.forEach(o => names.push(o.name));
    return names;
  }

  getDataEmployees(employees: Employee[]){
    let data: string[] = [];
    employees.forEach(employees => data.push(employees.name!));
    return data;
  }
}

