import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../material.module';
import {TaskService} from '../task.service';
import {TaskDto} from '../dto/TaskDto';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {
  private subscription: Subscription;
  @Input()
  task: TaskDto;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTask();
  }

  ngOnDestroy() {
    if (this.subscription !== null && this.subscription !== undefined ) {
      this.subscription.unsubscribe();
    }
  }

  private getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.taskService.getTask(id)
    .subscribe(x => this.task = x);
  }
}
