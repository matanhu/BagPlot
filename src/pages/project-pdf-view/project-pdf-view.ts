import { Item } from '../../models/item';
import { Project } from '../../models/project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-project-pdf-view',
  templateUrl: 'project-pdf-view.html',
})
export class ProjectPdfViewPage {

  project: Project;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.project = this.navParams.get('project');
      if(this.project.itemsList) {
        this.project.itemsList = Object.keys(this.project.itemsList)
                          .map((key) => { 
                              var temp: Item = this.project.itemsList[key];
                              return temp;
                          });
      } else {
        this.project.itemsList = new Array<Item>();
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPdfViewPage');
  }

}
