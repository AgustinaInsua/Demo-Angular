import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { CustomValidationsService } from '../services/custon-validations/custom-validations.service';
import { UsersValidationsService } from '../services/users-validation/users-validations.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  user!: User;
  
  constructor(
    private router: Router,
    private customValidations: CustomValidationsService,
    private usersValidation: UsersValidationsService
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    if (this.usersValidation.validateLoggin(this.user)) {
      this.usersValidation.saveUser(this.user);
      this.router.navigate(['/home'])
      console.log(this.user);
    } else
      alert('User or Password incorrect');
  }

}
