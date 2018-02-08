import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { TaskDto } from '../dto/TaskDto';
import { TaskService } from '../task.service';
import {  MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent  {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tasks: TaskDto[];
  dataSource: MatTableDataSource<TaskDto>;
  displayedColumns = ['id', 'title', 'description', 'isDone' , 'borderDate'];
  constructor(private taskService: TaskService) {     }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(x => this.tasks = x);
    this.dataSource = new MatTableDataSource(this.tasks);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}


