import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import {TaskDto} from '../dto/TaskDto';

@Component({
  selector: 'app-task-details-component',
  templateUrl: './task-details-component.component.html',
  styleUrls: ['./task-details-component.component.css']
})
export class TaskDetailsComponentComponent  {
  @Input()
  task: TaskDto;
}
