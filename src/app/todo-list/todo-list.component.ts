import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/Todo';
import TodoService from '../services/TodoService'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    TodoService
  ]
})
export class TodoListComponent implements OnInit {

  todoItem: Array<Todo>;

  constructor(private todoService: TodoService) { }


  ngOnInit() {
    this.todoService.getTodo().then(value => this.todoItem = value)

  }

}
