import { Response } from '@angular/http';
import { ItemService } from '../../services/item';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Item } from '../../models/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
  item: Item;
  projectId: string;
  editText = false;
  textEditted = '';
  editTitle = false;
  titleEditted = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private itemService: ItemService,
    private camera: Camera) {
      this.item = this.navParams.get('item');
      this.projectId = this.navParams.get('projectId');
      if(!this.item) {
        this.item = new Item('','','');
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
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
      
      this.item.image = 'data:image/jpeg;base64,' + imageData;
      //   this.projectService.addImage(this.project);
      // }, (err) => {
      
        // Handle error
    });
  }

  saveEditText() {
    this.item.text = this.textEditted;
    this.textEditted = '';
    this.editText = false;
    // this.projectService.updateDescription(this.project.projectId, this.project.projectDescription)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  calncelEditText() {
    this.editText = false;
    this.textEditted = '';
  }

  setEditText() {
    this.editText = true;
    this.textEditted = this.item.text;
  }

  saveEditTitle() {
    this.item.title = this.titleEditted;
    this.titleEditted = '';
    this.editTitle = false;
    // this.projectService.updateProjectName(this.project.projectId, this.project.projectName)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  calncelEditTitle() {
    this.editTitle = false;
    this.titleEditted = '';
  }

  setEditTitle() {
    this.editTitle = true;
    this.titleEditted = this.item.title;
  }

  saveImage() {
    if(this.item.image) {
    this.itemService.addImage(this.item, this.projectId)
      .then((res: Response) => {
        if(res.ok) {
          console.log(res);
          this.item.image = res.json();
          this.saveItem();
        }
      });
    } else {
      this.saveItem();
    }
  }

  saveItem() {
    console.log(this.item);
    this.itemService.addItem(this.item, this.projectId)
      .then((res) => {
        if(!res) {
          console.log("saveItem success");
          // this.navCtrl.pop(this.item);
          this.viewCtrl.dismiss(this.item);
        }
        console.log("saveItem error: " + res);
      });
  }

  cancelEdit() {
    this.viewCtrl.dismiss();
  }

}
