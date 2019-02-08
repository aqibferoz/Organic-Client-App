import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrendingBeersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trending-beers',
  templateUrl: 'trending-beers.html',
})
export class TrendingBeersPage {
  data = [
    {
      "id": 1,
      "avatar": "assets/imgs/2.jpg",
      "image": "assets/images/avatar/15.jpg",
      "title": "Vengeful Spirit IPA",
      "subtitle": "Stone Brewing",
      "number": "4.31",
      "button": "Categories",
      "text": "Avg",
  },
  {
    "id": 1,
    "avatar": "assets/imgs/2.jpg",
    "image": "assets/images/avatar/15.jpg",
    "title": "Vengeful Spirit IPA",
    "subtitle": "Stone Brewing",
    "number": "4.31",
    "button": "Categories",
    "text": "Avg",
},
{
  "id": 1,
  "avatar": "assets/imgs/2.jpg",
  "image": "assets/images/avatar/15.jpg",
  "title": "Vengeful Spirit IPA",
  "subtitle": "Stone Brewing",
  "number": "4.31",
  "button": "Categories",
  "text": "Avg",
},
{
  "id": 1,
  "avatar": "assets/imgs/2.jpg",
  "image": "assets/images/avatar/15.jpg",
  "title": "Vengeful Spirit IPA",
  "subtitle": "Stone Brewing",
  "number": "4.31",
  "button": "Categories",
  "text": "Avg",
},
{
  "id": 1,
  "avatar": "assets/imgs/2.jpg",
  "image": "assets/images/avatar/15.jpg",
  "title": "Vengeful Spirit IPA",
  "subtitle": "Stone Brewing",
  "number": "4.31",
  "button": "Categories",
  "text": "Avg",
},
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingBeersPage');
  }

}
