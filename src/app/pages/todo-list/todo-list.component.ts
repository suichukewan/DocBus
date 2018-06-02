import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {TodoList}  from '../../core/todo-list/todo-list'
import  {TodoListService}  from  '../../core/todo-list/todo-list.service'

@Component({
  selector: 'app-todo-list',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
})
export class TodoListComponent implements OnInit {
  location:Location;
  todoLists:TodoList[];

  constructor(location: Location,private todoListService :TodoListService ) {
    this.location=location;
   }

   goBack(){
   this.location.back();
   }

   getTodoLists(): void {
    this.todoListService.getTodoLists()
    .subscribe(todoLists => this.todoLists = todoLists);
  }

  ngOnInit() {
    // this.getTodoLists();
    this.todoLists= [
      {
        id:123,
        title: '你好',
        name: '张飞',
        time: '2012/12/2'
      },
      {
        id:123,
        title: '你好',
        name: '张飞',
        time: '2012/12/2'
      },{
        id:123,
        title: '你好',
        name: '张飞',
        time: '2012/12/2'
      },{
        id:123,
        title: '你好',
        name: '张飞',
        time: '2012/12/2'
      },{
        id:123,
        title: '你好',
        name: '张飞',
        time: '2012/12/2'
      }
    ];
  }
}
