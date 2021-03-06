import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Deeplinks } from '@ionic-native/deeplinks';
import { ChartModule } from 'angular2-highcharts';
import * as highCharts from 'highcharts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContentDrawerComponent } from "../components/content-drawer/content-drawer";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContentDrawerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartModule.forRoot(highCharts)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    Deeplinks,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
