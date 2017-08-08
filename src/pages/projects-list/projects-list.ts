import { ProjectService } from '../../services/project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Project } from "../../models/project";
import { Item } from "../../models/item";
import { EditProjectPage } from '../edit-project/edit-project';


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
      //   for(let j = 0 ; j< 100 ; j++) {
      //     // const items = new Array<Item>();
      //     const item = new Item("title" + j, "imgItem" + j, "text" + j);
      //     items.push(item);
      //   }
      //   let number = i+1;
      //   const project = new Project(
      //     "פרויקט מספר " + number, 
      //     "https://images.haaretz.co.il/polopoly_fs/1.2920621.1461077898!/image/1096157220.jpg_gen/derivatives/size_1846xAuto/1096157220.jpg",
      //     "פרויקט מחיר למשתכן, הגרלה 120, שכונת הרקפות, ראשון לציון" + i,
      //     items, 
      //     {latitude: 11.11, longitude: 11.11});
      //     this.projectService.addProject(project)
      //       .subscribe( (response) => {
      //         console.log(response);
      //         this.projectList.push(project);
      //       });
      // }
      this.projectService.getAllProjects()
        // .subscribe((response: Project[]) => {
        .then((response: Project[]) => {
          this.projectList = response;
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsListPage');
  }

  projectSelected(project: Project) {
    console.log(project);
    this.navCtrl.push(EditProjectPage, {project: project});
  }

}
