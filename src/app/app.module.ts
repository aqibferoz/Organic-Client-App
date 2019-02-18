import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActivityPage } from '../pages/activity/activity';
import { LocationPage } from '../pages/location/location';
import { VerifiedVenuesPage } from '../pages/verified-venues/verified-venues';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MessagesPage } from '../pages/messages/messages';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { FriendsPage } from '../pages/friends/friends';
import { TrendingBeersPage } from '../pages/trending-beers/trending-beers';

import { Geolocation } from '@ionic-native/geolocation';
import { NgxInputStarRatingModule } from 'ngx-input-star-rating';

import { TrendingLocationsPage } from '../pages/trending-locations/trending-locations';
import { TopRatedFoodPage } from '../pages/top-rated-food/top-rated-food';

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    LocationPage,
    VerifiedVenuesPage,
    ProfilePage,
    NotificationsPage,
    TabsPage,
    MessagesPage,
    LoginPage,
    SignupPage,
    SettingsPage,
    FriendsPage,
    TrendingBeersPage,
    TrendingLocationsPage,
    TopRatedFoodPage
  ],
  imports: [
    BrowserModule,
    NgxInputStarRatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    LocationPage,
    VerifiedVenuesPage,
    ProfilePage,
    NotificationsPage,
    TabsPage,
    MessagesPage,
    LoginPage,
    SignupPage,
    SettingsPage,
    FriendsPage,
    TrendingBeersPage,
    TrendingLocationsPage,
    TopRatedFoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
