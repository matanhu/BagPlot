import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from '../models/project';
import 'rxjs/Rx';

import firebase from 'firebase';

@Injectable()
export class ProjectService {
    projects: Project[] = [];
    database: firebase.database.Database;
    storage: firebase.storage.Storage;

    constructor(
        private http: Http) {
            this.database = firebase.database();
            this.storage = firebase.storage();
        }


    setProjects(projects) {
        this.projects = projects;
    }

    addProject(project: Project) {
        return this.http.post('https://bagplot-b2914.firebaseio.com/projects.json', project)
            .map(response => {
                return response.json();
            });
    }

    addImage(project: Project) {
        const imageRef = this.storage.ref().child(`${project.projectId}/projectImage`);
        imageRef.putString(project.projectImage, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
            console.log(snapshot);
            this.updateImagePath(project.projectId, snapshot.downloadURL)
                .subscribe(res => {
                    console.log(res);
                })
        });
    }

    updateImagePath(projectId: string, imagePath: string) {
        return this.http.put(`https://bagplot-b2914.firebaseio.com/projects/${projectId}/projectImage.json`, JSON.stringify(imagePath))
            .map(response => {
                return response.json();
            });
    }

    updateDescription(projectId: string, projectDescription: string) {
        return this.http.put(`https://bagplot-b2914.firebaseio.com/projects/${projectId}/projectDescription.json`, JSON.stringify(projectDescription))
            .map(response => {
                return response.json();
            });
    }

    updateProjectName(projectId: string, projectName: string) {
        return this.http.put(`https://bagplot-b2914.firebaseio.com/projects/${projectId}/projectName.json`, JSON.stringify(projectName))
            .map(response => {
                return response.json();
            });
    }
    
    // getAllProjects(): Observable<Project[]> {
    //     return this.http.get('https://bagplot-b2914.firebaseio.com/projects/.json')
    //     .map(response => {
    //         const projects = response.json() ? response.json() : [];
    //         let projectsList = Object.keys(projects).map(function (key) { return projects[key];});
    //         this.projects = projectsList;
    //         return this.projects;
    //     });
    // }

    getAllProjects() {
        return this.database.ref('/projects').once('value')
            .then((snapshot) => {
                    const projects = snapshot.val() ? snapshot.val() : [];
                    let projectsList = Object.keys(projects)
                        .map((key) => { 
                            var temp: Project = projects[key];
                            temp.projectId = key;
                            return temp;
                        });
                    this.projects = projectsList;
                    return this.projects;
                }
            );
    }
}