import { PipesModule } from '../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditItemPage } from './edit-item';

@NgModule({
  declarations: [
    EditItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditItemPage),
    PipesModule
  ],
})
export class EditItemPageModule {}
