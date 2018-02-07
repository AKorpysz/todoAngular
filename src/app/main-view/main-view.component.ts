import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TaskService } from '../task.service';
import { TaskDto } from '../dto/TaskDto';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  tasks: TaskDto[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(x => this.tasks = x);
  }

  clickMethod(task: TaskDto) {
    if (confirm('Are you sure to delete ' + task.title)) {
        this.taskService.remove(task);
    }
  }
}
