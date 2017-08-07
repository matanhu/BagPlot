import { ProjectService } from '../../services/project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Project } from "../../models/project";
import { Item } from "../../models/item";


@IonicPage()
@Component({
  selector: 'page-projects-list',
  templateUrl: 'projects-list.html',
})
export class ProjectsListPage {
  public projectList: Project[] = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private projectService: ProjectService) {
      // for(let i= 0 ; i< 100 ; i++) {
      //   const items = new Array<Item>();
      //   const item = new Item("title" + i, "imgItem" + i, "text" + i);
      //   items.push(item);
      //   const project = new Project(
      //     "project" + i, 
      //     "img" + i, 
      //     items, 
      //     {latitude: 11.11, longitude: 11.11});
      //     this.projectService.addProject(project)
      //       .subscribe( (response) => {
      //         console.log(response);
      //         this.projectList.push(project);
      //       });
      // }
      this.projectService.getAllProjects()
        .subscribe((response: Project[]) => {
          this.projectList = response;
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsListPage');
  }

  projectSelected(project: Project) {
    console.log(project);
  }

}
