import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {LoginComponent} from "../user-mgmt/login/login.component";
import {RegistrationComponent} from "../user-mgmt/registration/registartion.component";
import {DragulaModule} from "ng2-dragula";
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    HttpModule,
    DragulaModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent],
  providers: [UserService]
} as NgModule)
export class UserMgmtModule {
}
