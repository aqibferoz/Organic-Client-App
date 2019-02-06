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
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

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
    RegisterPage
  ],
  imports: [
    BrowserModule,
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
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
