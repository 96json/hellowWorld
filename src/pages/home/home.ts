import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UsersPage} from '../users/users';
import {EmployeesListPage} from '../employees-list/employees-list';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {ToastController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {UsersTabsPage} from '../users-tabs/users-tabs';
import {OfficesMenuPage} from '../offices-menu/offices-menu';
import {AddEmployeesPage} from "../add-employees/add-employees";
import {MyRequestsPage} from "../my-requests/my-requests";
import {tap} from 'rxjs/operators';
import {FcmProvider} from '../../providers/fcm/fcm';
import {LoginOfficePage} from "../login-office/login-office";
interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, private toastCtrl: ToastController) {

  }
  user = {} as User;

  openUsers() {

    this.navCtrl.setRoot(UsersTabsPage);


  }

  ionViewDidLoad() {
/*
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.openUsers()
        return;
      }
      console.log('not logged')

    });
*/

  }

  login(user: User) {

    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.openUsers()
      }).catch((e) => {
      console.error(e);
    })


  }

  register(user: User) {


    this.navCtrl.push(RegisterPage);
  }
}
