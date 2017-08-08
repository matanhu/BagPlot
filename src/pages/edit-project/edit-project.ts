import { Project } from '../../models/project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html',
})
export class EditProjectPage {
  project: Project;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project = this.navParams.get('project');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProjectPage');
  }

}
