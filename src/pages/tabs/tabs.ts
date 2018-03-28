import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//tabmenu
 
import { CoursePage } from '../../pages/course/course';
import { ServicePage } from '../../pages/service/service';
import { ArticlePage } from '../../pages/article/article';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  //create val for tab
  //valible:datatype

  tab1Root:any = HomePage;
  tab2Root:any = CoursePage;
  tab3Root:any = ServicePage;
  tab4Root:any = ArticlePage;
  tab5Root:any = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
