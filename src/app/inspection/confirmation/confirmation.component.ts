import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { InspectionService } from 'src/app/services/inspection/inspection.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers: [MessageService]
})
export class ConfirmationComponent implements OnInit {
  confirmationInformation : any;
  msgs1!: Message[];
  constructor(private router: Router, private inspectionService: InspectionService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.confirmationInformation = this.inspectionService.getConfirmationInformation();
    console.log(this.confirmationInformation.employeeInformation);
    console.log(this.confirmationInformation.employeeInformation.length);
    this.msgs1 = [
      {detail:'Message Content'},
  ];
  }
  confirm() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    this.inspectionService.addCompany();
  }

  showConfirm() {
   // this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }
  prevPage(){
    this.router.navigate(['inspection/employee']);
  }
}