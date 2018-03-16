import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { RegisterPage } from '../pages/register/register';
import{enviroment} from './firebase.credentials';
import { EmployeesListPage } from '../pages/employees-list/employees-list';
import { AddEmployeesPage } from '../pages/add-employees/add-employees';
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'
import {AngularFireAuth} from "angularfire2/auth";
import {EmployeeListService} from './../services/employees-list/employees-list.services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    EmployeesListPage,
    AddEmployeesPage,
    RegisterPage
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
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeeListService
  ]
})
export class AppModule {}
