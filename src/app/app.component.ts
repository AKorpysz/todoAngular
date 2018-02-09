import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { TASKS } from '../app/mock-tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo APP';
  @Input() stateCtrl: FormControl;
  filteredTasks: Observable<any[]>;
  tasks = TASKS;
  opened = true;
  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredTasks = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(task => task ? this.filterTasks(task) : this.tasks.slice())
      );
  }
  filterTasks(name: string) {
    return this.tasks.filter(state =>
      state.title.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  open(): void {
    this.opened = !this.opened;
  }
}
