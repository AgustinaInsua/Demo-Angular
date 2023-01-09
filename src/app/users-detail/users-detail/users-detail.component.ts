import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';
import { User } from 'src/app/model/User';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  users= USERS;
  selectedUser!: User;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log(this.selectedUser);
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
