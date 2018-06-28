import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import pages
import {HomePage} from '../pages/home/home';
import {CategoriesPage} from '../pages/categories/categories';
import {FavoritePage} from '../pages/favorite/favorite';
import {CartPage} from '../pages/cart/cart';
import {OfferPage} from '../pages/offer/offer';
import {UserPage} from '../pages/user/user';
import {SettingPage} from '../pages/setting/setting';
import {NewsPage} from '../pages/news/news';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {ChatsPage} from '../pages/chats/chats';
// end import pages

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'Home',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },

    {
      title: 'Categories',
      icon: 'apps',
      count: 0,
      component: CategoriesPage
    },

    {
      title: 'Favorite',
      icon: 'star-outline',
      count: 5,
      component: FavoritePage
    },

    {
      title: 'My Cart',
      icon: 'ios-cart-outline',
      count: 2,
      component: CartPage
    },

    {
      title: 'Offer',
      icon: 'ios-pricetag-outline',
      count: 2,
      component: OfferPage
    },

    {
      title: 'Setting',
      icon: 'ios-settings-outline',
      count: 0,
      component: SettingPage
    },

    {
      title: 'News',
      icon: 'ios-paper-outline',
      count: 0,
      component: NewsPage
    },

    {
      title: 'About us',
      icon: 'ios-information-circle-outline',
      count: 0,
      component: AboutPage
    },

    {
      title: 'Supports',
      icon: 'ios-help-circle-outline',
      count: 0,
      component: ChatsPage
    },

    {
      title: 'Logout',
      icon: 'ios-exit-outline',
      count: 0,
      component: LoginPage
    },
    // import menu


  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // view my profile
  viewMyProfile() {
    this.nav.setRoot(UserPage);
  }
}


