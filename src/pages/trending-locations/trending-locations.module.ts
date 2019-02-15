import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrendingLocationsPage } from './trending-locations';

@NgModule({
  declarations: [
    TrendingLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrendingLocationsPage),
  ],
})
export class TrendingLocationsPageModule {}
