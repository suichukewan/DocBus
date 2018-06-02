import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent}  from  './pages/login/login.component';
import {TodoListComponent}  from  './pages/todo-list/todo-list.component';
import {NavsComponent}  from  './pages/navs/navs.component';
import { LoginGuardService } from './core/login-guard.service';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},{
  path:'todo-list',
  component:TodoListComponent
},{
  path:'navs',
  canActivate: [LoginGuardService],
  component:NavsComponent
},{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: [LoginGuardService]
})

export class AppRoutingModule { }
