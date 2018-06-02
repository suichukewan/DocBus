import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { TodoList } from './todo-list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoListService {
  private todoListUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
  ) { }

  getTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.todoListUrl).pipe(
      tap(todoLists => console.log(`fetched hero`)),);
  }

}
