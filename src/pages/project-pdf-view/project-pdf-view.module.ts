import { PipesModule } from '../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPdfViewPage } from './project-pdf-view';

@NgModule({
  declarations: [
    ProjectPdfViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPdfViewPage),
    PipesModule
  ],
})
export class ProjectPdfViewPageModule {}
