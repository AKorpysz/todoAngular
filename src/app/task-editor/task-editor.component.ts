import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import {TaskService} from '../task.service';
import {TaskDto} from '../dto/TaskDto';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {
  @Input()
  task: TaskDto;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTask();
  }

  private getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
    .subscribe(x => this.task = x);
  }

}
