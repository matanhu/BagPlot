import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from '../models/project';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
    projects: Project[] = [];

    constructor(
        private http: Http) {}

    addProject(project: Project) {
        return this.http.post('https://bagplot-b2914.firebaseio.com/projects.json', project)
            .map(response => {
                return response.json();
            });
    }
    
    getAllProjects(): Observable<Project[]> {
        return this.http.get('https://bagplot-b2914.firebaseio.com/projects/.json')
            .map(response => {
                const projects = response.json() ? response.json() : [];
                let projectsList = Object.keys(projects).map(function (key) { return projects[key]; });
                this.projects = projectsList;
                return this.projects;
            });
    }
}