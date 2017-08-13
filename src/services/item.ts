import { Item } from '../models/item';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import firebase from 'firebase';

@Injectable()
export class ItemService {
    database: firebase.database.Database;
    storage: firebase.storage.Storage;

    constructor(
        private http: Http) {
            this.database = firebase.database();
            this.storage = firebase.storage();
    }

    addItem(item: Item, projectId: string) {
        return this.database.ref().child('projects').child(projectId).child('itemsList').child(item.itemId)
            .set(item)
            .then(response => {
                if(!response) {
                    return null;
                }
                return response;
            });
    }

    addImage(item: Item, projectId: string) {
        const imageRef = this.storage.ref().child(`${projectId}/${item.itemId}/itemImage`);
        return imageRef.putString(item.image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
            console.log(snapshot);
            return this.updateImagePath(item, projectId, snapshot.downloadURL)
                .subscribe(res => {
                    console.log(res);
                    return res;
                })
        });
    }

    updateImagePath(item: Item, projectId: string, imagePath: string) {
        return this.http.put(`https://bagplot-b2914.firebaseio.com/projects/${projectId}/itemsList/${item.itemId}/image.json`, JSON.stringify(imagePath))
            .map(response => {
                return response;
            });
    }
}