import { FormGroup } from '@angular/forms';
import { User } from '../../model/User';
import { Injectable } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersValidationsService {
  constructor() { }

  existUser(email: string) {
    return USERS.some((obj) => {
      return (obj.email === email)
    });
  }

  validateLoggin(email: string, password: string) {
    return USERS.some((obj) => {
      return (obj.email === email) && (obj.password === password)
    });
  }

  public fieldValue(form: FormGroup, field: string) {
    return form.get(field)?.value;
  }

  registerUser(user: User) {
    if (!this.existUser(user.email!)) {
      USERS.push({id : USERS.length+1, name: user.name, surname : user.surname, phone: user.phone, email: user.email, password: user.password});  
      return true;
    } else
      return false;
  }

  
}
