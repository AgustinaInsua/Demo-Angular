import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items !: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'Users', icon: 'pi pi-fw pi-calendar', routerLink: ['/usersDetail']},
      {label: 'Inspection', icon: 'pi pi-fw pi-pencil', routerLink: ['/inspection']}
  ];
  }

}
