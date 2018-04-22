import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {PapersinfoPage} from  '../pages/papersinfo/papersinfo';
import {OfficesMenuPage} from  '../pages/offices-menu/offices-menu';
import {MyRequestsPage} from  '../pages/my-requests/my-requests';
import {UsersTabsPage } from '../pages/users-tabs/users-tabs';

import {SmsPage} from  '../pages/sms/sms';
import {OfficeRequestsPage} from  '../pages/office-requests/office-requests';
import {MyEmployeesPage} from  '../pages/my-employees/my-employees';
import {OfficesTabsPage } from '../pages/offices-tabs/offices-tabs';

import {UserEditRequestPage} from '../pages/user-edit-request/user-edit-request';
import {RequestEmployeePage} from '../pages/request-employee/request-employee';
import {EmployeeOfOfficePage} from '../pages/employee-of-office/employee-of-office';
import {OfficeEditRequestPage} from '../pages/office-edit-request/office-edit-request';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { RegisterPage } from '../pages/register/register';
import{enviroment} from './firebase.credentials';
import { EmployeesListPage } from '../pages/employees-list/employees-list';
import { AddEmployeesPage } from '../pages/add-employees/add-employees';
import {EditEmployeesPage}from "../pages/edit-employees/edit-employees";
import {RegisterOfficePage}from "../pages/register-office/register-office";
import {LoginOfficePage}from "../pages/login-office/login-office";
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'
import {AngularFireAuth} from "angularfire2/auth";
import {EmployeeListService} from './../services/employees-list/employees-list.services';
import {officeListService} from './../services/offices-list/offices-list.services';
import { FcmProvider } from '../providers/fcm/fcm';
import { SMS } from '@ionic-native/sms';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    EmployeesListPage,
    AddEmployeesPage,
    RegisterPage,
    PapersinfoPage,
    OfficesMenuPage,
    MyRequestsPage,
    UsersTabsPage,
    RegisterOfficePage,
    LoginOfficePage,
    OfficesTabsPage,
    MyEmployeesPage,
    OfficeRequestsPage,
    SmsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    EmployeesListPage,
    AddEmployeesPage,
    RegisterPage,
    PapersinfoPage,
    OfficesMenuPage,
    MyRequestsPage,
    UsersTabsPage,
    RegisterOfficePage,
    LoginOfficePage,
    OfficesTabsPage,
    MyEmployeesPage,
    OfficeRequestsPage,
    SmsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeeListService,
    FcmProvider,
    officeListService,
    SMS
  ]
})
export class AppModule {}
