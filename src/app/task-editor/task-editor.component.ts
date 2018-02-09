import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import {TaskService} from '../task.service';
import {TaskDto} from '../dto/TaskDto';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-editor',
  templateUrl: '../shared/editor-template.html',
  styleUrls: ['../shared/editor-template.css']
})
export class TaskEditorComponent implements OnInit {
  @Input()
  task: TaskDto;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTask();
  }

  private getTask(): void {
    if (this.task === null || this.task === undefined ) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
    .subscribe(x => this.task = x);
    }
  }
}