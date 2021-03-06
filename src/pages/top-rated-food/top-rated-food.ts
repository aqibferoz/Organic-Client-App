import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the TopRatedFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated-food',
  templateUrl: 'top-rated-food.html',
})
export class TopRatedFoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetController: ActionSheetController) {
  }
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
      "avg": "4.74",
      "ratings": "13,742"
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedFoodPage');
  }
  async presentActionSheet(item) {
    const actionSheet = await this.actionSheetController.create({
      title: item.title,

      buttons: [{
        text: 'Check-In',
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
        text: 'Find It',
        // icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Add to List',
        // icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'View Beer Details',
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
