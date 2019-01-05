import {IProject}        from '../../../../shared/models/project';
import {SimpleState}     from './simple-state';
import {Injectable}      from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IProjectState {
  data: IProject[];
  currentProject: IProject;
  isBusy: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectState extends SimpleState<IProjectState> {
  constructor() {
    super({
      data: [],
      currentProject: null,
      isBusy: false,
    });
  }

  Projects$ = new BehaviorSubject<IProject[]>([]);
  CurrentProject$ = new BehaviorSubject<IProject>(null);
  IsBusy$ = new BehaviorSubject(false);

  get Projects(): IProject[] {
    return this.CurrentState.data;
  }
  set Projects(value: IProject[]) {
    this.setState('data', value);
    this.Projects$.next(this.CurrentState.data);

    this.CurrentProject = value[0];
  }

  get CurrentProject(): IProject {
    return this.CurrentState.currentProject;
  }
  set CurrentProject(value: IProject) {
    this.setState('currentProject', value);
    this.CurrentProject$.next(this.CurrentState.currentProject);
  }

  get IsBusy(): boolean {
    return this.CurrentState.isBusy;
  }
  set IsBusy(value: boolean) {
    this.setState('isBusy', value);
    this.IsBusy$.next(this.CurrentState.isBusy);
  }
}
