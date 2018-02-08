import { Component, OnInit, Input } from '@angular/core';
import { TaskEditorComponent} from '../task-editor/task-editor.component';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { TaskDto } from '../dto/TaskDto';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input()
  newTask = new TaskDto();
  tasks = TASKS;
  version = 'to jest testowy string';
  tmpTask = TASKS[0];

  ngOnInit() {
  }
}
