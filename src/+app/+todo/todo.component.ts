import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/models/model.service';
import { Todo } from './todo.schema'


@Component({
  selector: 'todo',
  styles: [`
    .table {
      padding-top: 30px;
    }
    .row {
      display: table-row;
      background: #f6f6f6;
    }
    
    .row:nth-of-type(odd) {
      background: #e9e9e9;
    }
    
    .row.header {
      color: #ffffff;
      font-weight: bold;
      background: #158126;
    }
    
    .cell {
      padding: 20px;
      display: table-cell;
    }

  `],
  template: `
    <div class="todo">
    
      Todo component
      <form #f="ngForm" (ngSubmit)="addTodo()">
        <input name="newTodo" [(ngModel)]="newValue">
        <button>Submit</button>
      </form>
    
      <div class="table">
        <div class="row header">
          <div class="cell">Id</div>
          <div class="cell">Created at</div>
          <div class="cell">Value</div>
          <div class="cell">Completed</div>
        </div>
        <div class="row" *ngFor="let todo of todos">
          <div class="cell">{{todo.id}}</div>
          <div class="cell">{{todo.created_at | date: 'dd/MM/yyyy HH:mm:ss'}}</div>
          <div class="cell">{{todo.value}}</div>
          <div class="cell">{{todo.completed}}</div>
        </div>
      </div>
    </div>
  `
})
export class TodoComponent {

  todos: Todo[];
  newTodo: Todo;
  newValue = '';

  constructor(public model: ModelService) {
    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  addTodo() {
    this.newTodo = new Todo(
      this.todos.length,
      new Date(),
      this.newValue,
      false
    );
    this.todos.push(this.newTodo);
    this.newValue = '';
  }

  universalInit() {
    this.model
      .get('/api/todos')
      .subscribe(data => {
        console.log(data);
        this.todos = data;
    });
  }

}
