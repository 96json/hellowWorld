import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToastController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {UsersTabsPage} from '../users-tabs/users-tabs';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterOfficePage} from "../register-office/register-office";
import {UserInfoProvider} from "../../providers/user-info/user-info";

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  form: FormGroup;

  constructor(private userInfoProvider:UserInfoProvider ,private afAuth: AngularFireAuth, public navCtrl: NavController,
              private toastCtrl: ToastController, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['office@mail.com', Validators.compose([Validators.maxLength(30),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        Validators.required])],
      password: ['password', Validators.compose([Validators.minLength(6), Validators.required])],
    });


  }

  user = {} as User;

  openUsers() {

    this.navCtrl.setRoot(UsersTabsPage);


  }

  ionViewDidLoad() {

    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.userInfoProvider.setDataUser(user);
        this.openUsers()
        return;
      }else{

        console.log('not logged')
      }
    });


  }

  doLogin() {
    const {email, password} = this.form.value;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.openUsers()
      }).catch((e) => {
      console.error(e);
    })


  }

  register(user: User) {
    this.navCtrl.push(RegisterPage);
  }


  registerAsOffice(user: User) {
    this.navCtrl.push(RegisterOfficePage);
  }
}
