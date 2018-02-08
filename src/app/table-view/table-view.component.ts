import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TaskDto } from '../dto/TaskDto';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  tasks: TaskDto[];
  displayedColumns = ['id', 'title', 'description', 'isDone' , 'borderDate'];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(x => this.tasks = x);
  }

}
