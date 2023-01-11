import { FormGroup } from '@angular/forms';
import { User } from '../../model/User';
import { Injectable } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersValidationsService {
  userLogin!: User;
  constructor() { }

  existUser(email: string) {
    return USERS.some((obj) => {
      return (obj.email === email)
    });
  }

  validateLoggin(user: User) {
    return USERS.some((obj) => {
      return (obj.email === user.email) && (obj.password === user.password)
    });
  }

  saveUser(user: User){
    for(let i=0; i<USERS.length; i++) {
      if(USERS[i].email == user.email && USERS[i].password== user.password){
        this.userLogin = USERS[i];
      }
    }
  }

  updateUser(user: User){
    for(let i=0; i<USERS.length; i++) {
      if(this.existUser(user.email!)){
        USERS[i] = user;
        console.log(USERS[i]);
      }
    }
  }

  registerUser(user: User) {
    if (!this.existUser(user.email!)) {
      USERS.push({id : USERS.length+1, name: user.name, surname : user.surname, phone: user.phone, email: user.email, password: user.password});  
      return true;
    } else
      return false;
  }

  
}
