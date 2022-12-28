import { USERS } from 'src/app/model/mock-users';
import { User } from './../model/User';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationsService } from '../services/custon-validations/custom-validations.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersValidationsService } from '../services/users-validation/users-validations.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public preview?: string;
  public formRegister!: FormGroup;
  public user!: User;

  constructor(
    private customValidations: CustomValidationsService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private usersValidations: UsersValidationsService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    this.usersValidations.registerUser(this.user);
    console.log(USERS);
    this.router.navigateByUrl('/login');
  }

  captureFile(event: any) {
    const fileCapturated = event.target.files[0];
    this.extraerBase64(fileCapturated).then((imagen: any) => {
      this.preview = imagen.base;
      console.log(imagen);

    })

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })
}
