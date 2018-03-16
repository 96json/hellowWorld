import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UsersPage} from '../users/users';
import {EmployeesListPage} from '../employees-list/employees-list';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToastController} from 'ionic-angular';
import {RegisterPage} from '../register/register';

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

    this.navCtrl.push(EmployeesListPage);


  }

  login(user: User) {

    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.navCtrl.push(EmployeesListPage);
      }).catch((e) => {
      console.error(e);
    })


  }

  register(user: User) {
   

    this.navCtrl.push(RegisterPage);
}
}