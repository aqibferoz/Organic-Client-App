import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';

/**
 * Generated class for the VerifiedVenuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verified-venues',
  templateUrl: 'verified-venues.html',
})
export class VerifiedVenuesPage {
data = {
  'title' : "Nearby Venues",
  'subtitle' : "Best places to find beer near you",

}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifiedVenuesPage');
  }
  messgaesPage(){
    this.navCtrl.push(MessagesPage)
  }
}
