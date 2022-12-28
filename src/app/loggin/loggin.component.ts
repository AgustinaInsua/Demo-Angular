import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationsService } from '../services/custon-validations/custom-validations.service';
import { UsersValidationsService } from '../services/users-validation/users-validations.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  public formLogin!: FormGroup;
  
  constructor(
    private router: Router,
    private customValidations: CustomValidationsService,
    private usersValidation: UsersValidationsService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        //Validators.minLength(6),     
        //this.customValidations.valitatorsNumbersValid(),
        //this.customValidations.valitatorsUpperCaseValid(),
        //this.customValidations.validatorsLowerCaseValid(),
        //this.customValidations.validatorsSpecialCharacter()
      ])
    })

  }

  loggin() {
    if (this.usersValidation.validateLoggin(this.emailValue, this.passwordValue)) {
      this.router.navigate(['/home'])
    } else
      alert('User or Password incorrect');
  }


  public fieldValid(field: string) {
    return this.formLogin.controls[field].errors === null;
  }

  public fieldRequiredValid(field : string) {
    return !this.formLogin.controls[field].hasError("required");
  }

  public fieldMinLengthValid(field: string) {
    return !this.formLogin.controls[field].hasError("minlength");
  }

  get emailValidateStructure() {
    return !this.formLogin.controls["email"].hasError("email");
  }

  public isNotValidAndIsDirtyOrIsTouched(field : string){
    return !this.fieldValid(field) && (this.isDirty(field) || this.isTouched(field));
  }

  get emailValue() {
    return this.formLogin.get('email')?.value;
  }

  get emailValid() {
    return this.formLogin.controls["email"].errors === null;
  }

  get passwordValue() {
    return this.formLogin.get('password')?.value;
  }

  get passwordValid() {
    return this.formLogin.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.formLogin.controls["password"].hasError("required");
  }

  get minLengthValid() {
    return !this.formLogin.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.formLogin.controls["password"].hasError("requiresDigit");
  }

  get requiresUpperCaseValid() {
    return !this.formLogin.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowerCaseValid() {
    return !this.formLogin.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.formLogin.controls["password"].hasError("requiresSpecialChars");
  }

  public isDirty(field: string): boolean {
    return this.formLogin.controls[field].dirty;
  }

  public isTouched(field: string): boolean {
    return this.formLogin.controls[field].touched;
  }

}
