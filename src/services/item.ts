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
        return this.database.ref().child('project').child(projectId).child('itemsList').child(item.itemId)
            .set(item)
            .then(response => {
                console.log(response.json());
                return response.json();
            });
    }
}