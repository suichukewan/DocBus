import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';
import { TodoListService } from './core/todo-list/todo-list.service'
import { LoginService } from './core/login/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { FileDetailsComponent } from './pages/file-details/file-details.component';
import { NavsComponent } from './pages/navs/navs.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ApplicationInfoComponent } from './pages/application-info/application-info.component';
import { ApprovalRecordComponent } from './pages/approval-record/approval-record.component';
import { FileInfoComponent } from './pages/file-info/file-info.component';
import { LoginGuardService } from './core/login-guard.service';
import { UserinfoService } from './core/userinfo/userinfo.service';
import localforage  from  './core/localforage.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,
    FileDetailsComponent,
    NavsComponent,
    ProjectInfoComponent,
    ApplicationInfoComponent,
    ApprovalRecordComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent, {
      locationStrategy: 'path'
    }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoListService,
    LoginGuardService,
    UserinfoService,
    LoginService,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: APP_BASE_HREF,
      useValue: null
    }],
  entryComponents: [
    FileInfoComponent,
    ProjectInfoComponent,
    ApplicationInfoComponent,
    ApprovalRecordComponent,
    FileDetailsComponent
  ],
  bootstrap: [IonicApp]
})

export class AppModule {
}
