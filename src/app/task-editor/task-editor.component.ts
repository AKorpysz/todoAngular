import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import {TaskService} from '../task.service';
import {TaskDto} from '../dto/TaskDto';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
