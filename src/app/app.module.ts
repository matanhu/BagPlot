import { PipesModule } from '../pipes/pipes.module';
import { ProjectPdfViewPageModule } from '../pages/project-pdf-view/project-pdf-view.module';
import { ProjectTabsPageModule } from '../pages/project-tabs/project-tabs.module';
import { EditItemPageModule } from '../pages/edit-item/edit-item.module';
import { EditProjectPageModule } from '../pages/edit-project/edit-project.module';
import { ProjectsListPageModule } from '../pages/projects-list/projects-list.module';
import { ItemService } from '../services/item';
import { Nl2brPipe } from '../pipes/nl2br/nl2br';
import { Camera } from '@ionic-native/camera';
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
import { EditItemPage } from '../pages/edit-item/edit-item';
import { ProjectTabsPage } from '../pages/project-tabs/project-tabs';
import { ProjectPdfViewPage } from '../pages/project-pdf-view/project-pdf-view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ProjectsListPage,
    // EditProjectPage,
    // EditItemPage,
    // ProjectTabsPage,
    // ProjectPdfViewPage,
    // Nl2brPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ProjectsListPageModule,
    EditProjectPageModule,
    EditItemPageModule,
    ProjectTabsPageModule,
    ProjectPdfViewPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectsListPage,
    EditProjectPage,
    EditItemPage,
    ProjectTabsPage,
    ProjectPdfViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjectService,
    ItemService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
