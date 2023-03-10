import { TestingApiGenericComponent } from './testing-api-generic/testing-api-generic.component';
import { ConfirmationComponent } from './inspection/confirmation/confirmation.component';
import { CompanyComponent } from './inspection/company/company.component';
import { EmployeeComponent } from './inspection/employee/employee.component';
import { InspectionComponent } from './inspection/inspection.component';
import { UsersDetailComponent } from './users-detail/users-detail/users-detail.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LogginComponent } from './loggin/loggin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricipalViewComponent } from './pricipal-view/pricipal-view.component';
import { TableEmployeeComponent } from './inspection/employee/table-employee/table-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  {path:'home', component:PricipalViewComponent},
  {path:'login', component:LogginComponent},
  {path:'register', component: RegisterComponent},
  {path:'usersDetail', component: UsersDetailComponent},
  {path:'inspection', component: InspectionComponent,
    children: [
      {path:'', redirectTo: 'company', pathMatch: 'full'},
      {path:'employee', component: EmployeeComponent},
      {path:'company', component: CompanyComponent},
      {path:'confirmation', component: ConfirmationComponent},
      {path:'table-employee', component: TableEmployeeComponent}
  ]},
  {path:'test', component: TestingApiGenericComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
