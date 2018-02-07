import { Injectable } from '@angular/core';
import {TASKS} from './mock-tasks';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { TaskDto } from './dto/TaskDto';

@Injectable()
export class TaskService {

  constructor() { }

  getAllTasks(): Observable<TaskDto[]> {
    return of(TASKS);
  }

  getTask(id: number): Observable<TaskDto> {
    return of(TASKS.find(x => x.id === id));
  }
}
