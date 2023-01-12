import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Employee } from 'src/app/model/Employee';
import { User } from 'src/app/model/User';
import { UsersValidationsService } from 'src/app/services/users-validation/users-validations.service';
import { Router } from '@angular/router';
import { USERS } from 'src/app/model/mock-users';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: []
})
export class MenuComponent implements OnInit {
  items !: MenuItem[];
  avatar!: any;
  selectedEmployee!: User;
  mostrar = false;
  displayBasic!: boolean;
  
  position !:string;

  constructor(
    private userService: UsersValidationsService,
    private router : Router,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'Usuarios', icon: 'pi pi-fw pi-calendar', routerLink: ['/usersDetail']},
      {label: 'Fiscalización', icon: 'pi pi-fw pi-pencil', routerLink: ['/inspection']}
  ];
  this.selectedEmployee = USERS[0];
  }


  avatarMostrar(){
    this.mostrar=true;
    //this.selectedEmployee = this.userService.userLogin;
    this.displayBasic = true;
    console.log(this.selectedEmployee);
  }

  signOff(){
    this.selectedEmployee = new User();    
    this.messageService.add({severity:'info', summary:'Sesion cerrada', key:'mainToast',detail:'Se ha cerrado la sesion.', life:2000});
    this.router.navigate(["/login"]);   
  }
}
