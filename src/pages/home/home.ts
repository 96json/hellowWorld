import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { EmployeesListPage } from '../employees-list/employees-list';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, private toastCtrl: ToastController) {
    
  }
  user = {} as User;

  openUsers(){

this.navCtrl.push (EmployeesListPage);



  }
  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.push (EmployeesListPage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
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
  

}
