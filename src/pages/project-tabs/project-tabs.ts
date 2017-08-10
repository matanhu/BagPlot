<<<<<<< HEAD
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

=======
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

>>>>>>> d2d6a94251c3241a46215f3294fe1bb53c5244b7
@IonicPage()
@Component({
  selector: 'page-project-tabs',
  templateUrl: 'project-tabs.html',
})
export class ProjectTabsPage {

<<<<<<< HEAD
  editProjectPage = EditProjectPage;
  project: Project;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.project = this.navParams.get('project');
      
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> d2d6a94251c3241a46215f3294fe1bb53c5244b7
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectTabsPage');
  }

}
