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
export class TableViewComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selectedRowIndex = -1;
  tasks: TaskDto[];
  dataSource: MatTableDataSource<TaskDto>;
  displayedColumns = ['icon', 'id', 'title', 'description', 'isDone' , 'borderDate'];
  private colorGrey = 'grey';
  private colorGreen = 'green';
  private colorRed = 'red';
  constructor(private taskService: TaskService) {     }
  highlight(row) {
    this.selectedRowIndex = row.id;
  }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(x => this.tasks = x);
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getColor(task: TaskDto): string {
    if (task === null || task === undefined) {
      return this.colorGrey;
    }
    if (task.isDone) {
      return this.colorGreen;
    }
    return this.colorRed;
  }
}
