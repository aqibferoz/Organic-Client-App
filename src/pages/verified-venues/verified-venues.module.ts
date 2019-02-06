import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifiedVenuesPage } from './verified-venues';

@NgModule({
  declarations: [
    VerifiedVenuesPage,
  ],
  imports: [
    IonicPageModule.forChild(VerifiedVenuesPage),
  ],
})
export class VerifiedVenuesPageModule {}
