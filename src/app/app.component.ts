import { ProjectsListPage } from '../pages/projects-list/projects-list';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage:any = ProjectsListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
        apiKey: "AIzaSyC0LA_uWVK0YiGLG_FVNWZc_T1Fw9P6zRA",
        authDomain: "bagplot-b2914.firebaseapp.com",
        databaseURL: "https://bagplot-b2914.firebaseio.com",
        projectId: "bagplot-b2914",
        storageBucket: "bagplot-b2914.appspot.com",
        messagingSenderId: "577810091219"
      });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

