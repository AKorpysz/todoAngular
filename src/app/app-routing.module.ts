import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: MainViewComponent },
  { path: 'detail/:id', component: TaskEditorComponent },
  { path: 'add', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
