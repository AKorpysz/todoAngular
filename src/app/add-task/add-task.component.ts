import { Component, OnInit, Input } from '@angular/core';
import { TaskEditorComponent} from '../task-editor/task-editor.component';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDto } from '../dto/TaskDto';
import { TASKS } from '../mock-tasks';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  {

  constructor(private taskService: TaskService,
    public snackBar: MatSnackBar,
    private router: Router) { }
  @Input()
  newTask = new TaskDto();

  addTask(): void {
    try {
      this.taskService.add(this.newTask);
      this.snackBar.open('Zadanie dodane poprawnie !', 'Dodano poprawnie', {
        duration: 2000,
      });
      this.router.navigate(['']);
    } catch (err) {
      this.snackBar.open(err, 'Błąd !', {
        duration: 2000,
      });
    }
  }
}
