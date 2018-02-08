import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { TaskService } from './task.service';
import { MainViewComponent } from './main-view/main-view.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskChildComponent } from './task-child/task-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TaskEditorComponent,
    AddTaskComponent,
    TaskChildComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
