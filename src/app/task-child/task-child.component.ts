import { Component, OnInit, Input } from '@angular/core';
import { TaskDto } from '../dto/TaskDto';

@Component({
  selector: 'app-task-child',
  templateUrl: './task-child.component.html',
  styleUrls: ['./task-child.component.css']
})
export class TaskChildComponent implements OnInit {
  @Input()
  task: TaskDto;

  @Input() test: string;

  constructor() { }

  ngOnInit() {
  }

}
