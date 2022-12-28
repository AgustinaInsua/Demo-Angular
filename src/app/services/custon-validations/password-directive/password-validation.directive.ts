import { ValidatorFn } from '@angular/forms';
import { CustomValidationsService } from '../custom-validations.service';
import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appPasswordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}]
})

export class PasswordValidationDirective implements Validator{

  constructor() { 
  }
  
  validate(control: AbstractControl): ValidationErrors | null {
    return  CustomValidationsService.validatorsLowerCaseValid()(control) || 
            CustomValidationsService.valitatorsUpperCaseValid()(control) || 
            CustomValidationsService.valitatorsNumbersValid()(control) || 
            CustomValidationsService.validatorsSpecialCharacter()(control);
  }
  
}
