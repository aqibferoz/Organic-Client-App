import { Component } from '@angular/core';

import { ActivityPage } from '../activity/activity';
import { LocationPage } from '../location/location';
import { VerifiedVenuesPage } from '../verified-venues/verified-venues';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActivityPage;
  tab2Root = LocationPage;
  tab3Root = VerifiedVenuesPage;
  tab4Root = ProfilePage;
  tab5Root = NotificationsPage;

  constructor() {

  }
}
