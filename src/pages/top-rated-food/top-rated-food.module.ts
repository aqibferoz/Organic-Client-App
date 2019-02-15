import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopRatedFoodPage } from './top-rated-food';

@NgModule({
  declarations: [
    TopRatedFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(TopRatedFoodPage),
  ],
})
export class TopRatedFoodPageModule {}
