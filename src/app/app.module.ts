import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//New sidemenu
import { SchedulePage } from '../pages/schedule/schedule';
import { PortfolioPage } from '../pages/portfolio/portfolio';

//tabmenu
import { CoursePage } from '../pages/course/course';
import { ServicePage } from '../pages/service/service';
import { ArticlePage } from '../pages/article/article';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    SchedulePage,
    PortfolioPage,
    TabsPage,
    ContactPage,
    CoursePage,
    ArticlePage,
    ServicePage,
    //when you add here you have to add at "bootstrap: [IonicApp]," lower line

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    PortfolioPage,
    TabsPage,
    ContactPage,
    CoursePage,
    ArticlePage,
    ServicePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
