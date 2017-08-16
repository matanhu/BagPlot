import { Scroll } from 'ionic-angular/umd';
import { Item } from '../../models/item';
import { ProjectService } from '../../services/project';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Project } from '../../models/project';
import { Component, NgZone, ViewChild } from '@angular/core';
import { Card, Content, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
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
  @ViewChild('content')
  content: Content;
  @ViewChild('projectDetails')
  projectDetails: any;
  @ViewChild('addItemRow')
  addItemRow: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private ngZone: NgZone,
    private projectService: ProjectService,
    private modalCtrl: ModalController,
    private camera: Camera) {
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

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((event) => {
        this.onScroll(event);
    });
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

  addNewItem() {
    // this.navCtrl.push(EditItemPage, {projectId: this.project.projectId});
    let modal = this.modalCtrl.create(EditItemPage, {projectId: this.project.projectId});
    modal.onDidDismiss(
      item => {
        if(item) {
          console.log(item);
          this.project.itemsList.push(item);
        }
    });
    modal.present();
  }

  onSelectItem(itemSelected: Item) {
    // this.navCtrl.push(EditItemPage, {item: item, projectId: this.project.projectId});
    let modal = this.modalCtrl.create(EditItemPage, {item: itemSelected, projectId: this.project.projectId});
    modal.onDidDismiss(
      item => {
        if(item) {
          console.log(item);
          this.project.itemsList[itemSelected.itemId] = item;
        }
    });
    modal.present();
  }

  reorderItems(indexes) {
    let element = this.project.itemsList[indexes.from];
    this.project.itemsList.splice(indexes.from, 1);
    this.project.itemsList.splice(indexes.to, 0, element);
  }

  onScroll(event) {
    console.log(this.projectDetails );
    const offset = this.projectDetails.nativeElement.offsetTop + this.projectDetails.nativeElement.offsetHeight;
    if(event.deltaY > 0) {
      if(offset < event.startY + 500){
        this.projectDetails.nativeElement.classList.add("close"); 
        this.addItemRow.nativeElement.classList.add("fix");
      }
      console.log("scroll DOWN");
    } else {
      if(offset > event.startY){
        this.projectDetails.nativeElement.classList.remove("close");
        this.addItemRow.nativeElement.classList.remove("fix");
      }
      console.log("scroll UP");
    }
    
    
  }
}
