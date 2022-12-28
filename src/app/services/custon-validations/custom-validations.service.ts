import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { RegularExpressions } from './regular-expressions';

@Injectable({
  providedIn: 'root'
})

export class CustomValidationsService {


  constructor() { }
/*
  static passwordValidatorsRegEx(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? {valueValidation: true} : null;
    }
  }
*/
  static passwordValidatorsRegEx(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    }
  }

  static valitatorsNumbersValid(): ValidatorFn {
    return this.passwordValidatorsRegEx(RegularExpressions.atLeastANumber, { requiresDigit: true });
  }

  static valitatorsUpperCaseValid(): ValidatorFn {
    return (this.passwordValidatorsRegEx(RegularExpressions.atLeastAUpperCase, { requiresUppercase: true }));
  }

  static validatorsLowerCaseValid(): ValidatorFn {
    return this.passwordValidatorsRegEx(RegularExpressions.atLeastALowerCase, { requiresLowercase: true });
  }

  static validatorsSpecialCharacter(): ValidatorFn {
    return this.passwordValidatorsRegEx(RegularExpressions.atLeastASpecialCharacter, { requiresSpecialChars: true });
  }

}