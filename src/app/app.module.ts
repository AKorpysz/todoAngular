import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
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
import { TableViewComponent } from './table-view/table-view.component';
import { TruncateModule } from 'ng2-truncate';
import { TaskDetailsComponentComponent } from './task-details-component/task-details-component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TaskEditorComponent,
    AddTaskComponent,
    TaskChildComponent,
    TableViewComponent,
    TaskDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    TruncateModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [ TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
