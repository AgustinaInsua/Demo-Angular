import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
  items !: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
        label: 'Company',
        routerLink: 'company'},
      {
        label: 'Employees',
        routerLink: 'employee'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];
  }

}
