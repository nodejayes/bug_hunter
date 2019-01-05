import { Injectable } from '@angular/core';
import {ApiService}   from './api.service';
import {ProjectState} from '../states/project';
import {IProject} from '../../../../shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _api: ApiService,
              private _projectState: ProjectState) { }

  getProjects() {
    this._projectState.IsBusy = true;
    this._api.get<IProject[]>('projectmanagement/project')
      .subscribe(v => {
        this._projectState.Projects = v;
        this._projectState.IsBusy = false;
      });
  }

  getProjectDetails(id: number) {
    this._projectState.IsBusy = true;
    this._api.get<IProject>('projectmanagement/projectById', {'id': id.toString()})
      .subscribe(v => {
        this._projectState.CurrentProject = v;
        this._projectState.IsBusy = false;
      });
  }
}
