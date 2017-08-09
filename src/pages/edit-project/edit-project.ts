import { Item } from '../../models/item';
import { ProjectService } from '../../services/project';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Project } from '../../models/project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditItemPage } from '../edit-item/edit-item';

@IonicPage()
@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html',
})
export class EditProjectPage {
  project: Project;
  editDescription = false;
  descriptionEditted = '';
  editName = false;
  nameEditted = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private projectService: ProjectService,
    private camera: Camera) {
      this.project = this.navParams.get('project');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProjectPage');
  }

  getPicture() {
      const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.project.projectImage = 'data:image/jpeg;base64,' + imageData;
        this.projectService.addImage(this.project);
      }, (err) => {
      // Handle error
    });
  }

  saveEditDescription() {
    this.project.projectDescription = this.descriptionEditted;
    this.descriptionEditted = '';
    this.editDescription = false;
    this.projectService.updateDescription(this.project.projectId, this.project.projectDescription)
      .subscribe(res => {
        console.log(res);
      });
  }

  calncelEditDescription() {
    this.editDescription = false;
    this.descriptionEditted = '';
  }

  setEditDescription() {
    this.editDescription = true;
    this.descriptionEditted = this.project.projectDescription;
  }

  saveEditName() {
    this.project.projectName = this.nameEditted;
    this.nameEditted = '';
    this.editName = false;
    this.projectService.updateProjectName(this.project.projectId, this.project.projectName)
      .subscribe(res => {
        console.log(res);
      });
  }

  calncelEditName() {
    this.editName = false;
    this.nameEditted = '';
  }

  setEditName() {
    this.editName = true;
    this.nameEditted = this.project.projectName;
  }

  onSelectItem(item: Item) {
    this.navCtrl.push(EditItemPage, {item: item})
  }
}
