import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Employee } from 'src/app/model/Employee';
import { User } from 'src/app/model/User';
import { UsersValidationsService } from 'src/app/services/users-validation/users-validations.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items !: MenuItem[];
  avatar!: any;
  selectedEmployee!: User;
  mostrar = false;
  displayBasic!: boolean;
  
  position !:string;

  constructor(private userService: UsersValidationsService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'Users', icon: 'pi pi-fw pi-calendar', routerLink: ['/usersDetail']},
      {label: 'Inspection', icon: 'pi pi-fw pi-pencil', routerLink: ['/inspection']}
  ];
  }


  avatarMostrar(position: string){
    this.mostrar=true;
    this.selectedEmployee = this.userService.userLogin;
    this.displayBasic = true;
    this.position = position;
    console.log(this.selectedEmployee);
  }

}
