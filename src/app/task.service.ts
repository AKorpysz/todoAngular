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

  remove(task: TaskDto): void {
     if (task) {
       let index = TASKS.findIndex(x => x.id === task.id);
       if (index !== 1) {
          TASKS.splice(index, 1);
       }
     }
  }

  add(task: TaskDto): void {
    if (task === null || task === undefined) {
        return;
     }
     // tak wiem dodawanie idków po rozmiarze tablicy jest głupie
     const existingTask = TASKS.find(x => x.id === task.id);
     if (existingTask !== null && existingTask !== undefined) {
        throw new Error('Task exist, cannot add');
     }
     const id = TASKS.length + 1;
     task.id = id;
     TASKS.push(task);
  }
}
