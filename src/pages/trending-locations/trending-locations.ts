import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';

/**
 * Generated class for the TrendingLocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trending-locations',
  templateUrl: 'trending-locations.html',
})
export class TrendingLocationsPage {
  hide: boolean = false;
  data = [
    {
      "id": 1,
      "avatar": "assets/imgs/2.jpg",
      "image": "assets/images/avatar/15.jpg",
      "title": "Barrel Theory Beer Company",
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetController: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingLocationsPage');
  }
  async presentActionSheet(item) {
    const actionSheet = await this.actionSheetController.create({
      title: item.title,

      buttons: [{
        text: 'Add to List',
        role: 'destructive',
        // icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Send to Friend',
        // icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Details',
        // icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Cancel',
        // icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
onGlobal(){
  this.hide = true;
}
onLocal(){
  this.hide = false;
}
}
