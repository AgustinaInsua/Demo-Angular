import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { PricipalViewComponent } from './pricipal-view/pricipal-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PasswordValidationDirective } from './services/custon-validations/password-directive/password-validation.directive';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { MenuComponent } from './menu/menu/menu.component';
import { InspectionComponent } from './inspection/inspection.component';
import { UsersDetailComponent } from './users-detail/users-detail/users-detail.component';
import {StepsModule} from 'primeng/steps';
import { CompanyComponent } from './inspection/company/company.component';
import { EmployeeComponent } from './inspection/employee/employee.component';
import { ConfirmationComponent } from './inspection/confirmation/confirmation.component';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SpeedDialModule} from 'primeng/speeddial';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PricipalViewComponent,
    RegisterComponent,
    PasswordValidationDirective,
    MenuComponent,
    UsersDetailComponent,
    InspectionComponent,
    CompanyComponent,
    EmployeeComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    MenuModule,
    TabMenuModule,
    StepsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    SpeedDialModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
