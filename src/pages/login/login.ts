import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;
  password ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // forgotPassword(){
  //   const prompt = this.alertCtrl.create({
  //     title: 'Reset password',
      
  //     inputs: [
  //       {
  //         name: 'email',
  //         placeholder: 'Email address'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Send email',
  //         handler: data => {
  //           console.log('send clicked');
  //         }
  //       },
       
  //     ]
  //   });
  //   prompt.present();
  // }
  register(){
    this.navCtrl.push(SignupPage)
  }

  login(){
    this.navCtrl.push(TabsPage)
  }
}
