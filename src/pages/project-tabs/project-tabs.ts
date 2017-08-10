import { Item } from '../../models/item';
import { Project } from '../../models/project';
import { ProjectsListPage } from '../projects-list/projects-list';
import { EditProjectPage } from '../edit-project/edit-project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-tabs',
  templateUrl: 'project-tabs.html',
})
export class ProjectTabsPage {

  editProjectPage = EditProjectPage;
  project: Project;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.project = this.navParams.get('project');
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectTabsPage');
  }

}
