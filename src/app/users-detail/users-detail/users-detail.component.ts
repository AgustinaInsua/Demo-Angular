import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';
import { User } from 'src/app/model/User';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsersValidationsService } from 'src/app/services/users-validation/users-validations.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
  providers: [MessageService],
 encapsulation: ViewEncapsulation.None
})

export class UsersDetailComponent implements OnInit {
  users= USERS;
  selectedUser!: User;
  constructor(public messageService: MessageService, private userService: UsersValidationsService) { }
  displayResponsive!: boolean;
  displayEdit!: boolean;
  ngOnInit(): void {
  }

  showResponsiveDialog() {
    this.displayEdit = true;
    this.displayResponsive = true;
}

  onSelect(user: User): void {
    this.selectedUser = user;
    this.userService.updateUser(user);
   // console.log(this.selectedUser);
  }

exportExcel() {
     import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.users);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "users");
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
}
