import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { InspectionService } from 'src/app/services/inspection/inspection.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers: [ConfirmationService],
})
export class ConfirmationComponent implements OnInit {
  confirmationInformation: any;
  constructor(
    private router: Router,
    private inspectionService: InspectionService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.confirmationInformation =
      this.inspectionService.getConfirmationInformation();
    console.log(this.confirmationInformation.employeeInformation);
    console.log(this.confirmationInformation.employeeInformation.length);
  }
  showInfo(){
    this.router.navigate(['inspection/table-employee']);
  }
  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.inspectionService.addCompany();
        this.router.navigate(['inspection/company']);
      },
    });
  }

  prevPage() {
    this.router.navigate(['inspection/employee']);
  }
}
