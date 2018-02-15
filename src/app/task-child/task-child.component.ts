import { Component, Input } from '@angular/core';
import { TaskDto } from '../dto/TaskDto';

@Component({
  selector: 'app-task-child',
  templateUrl: './task-child.component.html',
  styleUrls: ['./task-child.component.css']
})
export class TaskChildComponent {
  @Input() task: TaskDto;
  @Input() major: number;
  @Input() minor: number;
  @Input() test: string;

  constructor() { }
}
