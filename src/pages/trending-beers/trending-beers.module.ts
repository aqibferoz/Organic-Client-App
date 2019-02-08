import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrendingBeersPage } from './trending-beers';

@NgModule({
  declarations: [
    TrendingBeersPage,
  ],
  imports: [
    IonicPageModule.forChild(TrendingBeersPage),
  ],
})
export class TrendingBeersPageModule {}
