import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToastController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {EmployeesListPage} from '../employees-list/employees-list';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersTabsPage} from "../users-tabs/users-tabs";
import {officeListService} from "../../services/offices-list/offices-list.services";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface User {
  key?: string;
  email: string;
  password: string;
  name: string;
  address: string;


}

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
              formBuilder: FormBuilder, private toastCtrl: ToastController, private db: AngularFireDatabase,
              private officeService: officeListService) {

    this.form = formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(30),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      name:['',Validators.required],
      address:[''],
      rules:[{write:false,read:true}]
    });
  }

  private userlistref = this.db.list<User>('userlist');

  register() {

    const {password, email} = this.form.value;
    const result = this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    ).then(ref => {
      this.officeService.addClientitem(this.form.value,ref)
        .then(ref => {
          this.navCtrl.setRoot(UsersTabsPage);
        });
    }).catch((e) => {
      console.error(e);
    })
    if (result) {
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
  }
}


