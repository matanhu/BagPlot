import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectTabsPage } from './project-tabs';

@NgModule({
  declarations: [
    ProjectTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectTabsPage),
  ],
})
export class ProjectTabsPageModule {}
