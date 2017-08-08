import { HttpModule } from '@angular/http';
import { ProjectService } from '../services/project';
import { ProjectsListPage } from '../pages/projects-list/projects-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditProjectPage } from '../pages/edit-project/edit-project';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectsListPage,
    EditProjectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectsListPage,
    EditProjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjectService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
