import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToastController} from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import {EmployeesListPage} from '../employees-list/employees-list';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface User {
  key?:string;
  email: string;
  password: string;
  name:string ;
  address: string ;


}

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth,
    private toastCtrl: ToastController , private db : AngularFireDatabase) {
  }
 user = {} as User;
 private userlistref = this.db.list<User>('userlist')
 
  register (user: User){


 
      const result = this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      
      )   .then(ref => {
        this.userlistref.push(user)
        this.navCtrl.push(EmployeesListPage, {key:ref.key});
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
    } catch (e) {
      console.error(e);
    }
  }
  

