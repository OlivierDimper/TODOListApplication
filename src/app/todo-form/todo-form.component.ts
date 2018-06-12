import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../Model/Todo';
import { FormsModule } from "@angular/forms";
import TodoService from '../services/TodoService'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [
    TodoService
  ]
})

export class TodoFormComponent implements OnInit {

  newTodo: Todo = new Todo("", false);

  @Input()
  todoItem: Array<Todo>;

  constructor(private todoService: TodoService) { }

  handleClick() {
    console.log('TODO', this.newTodo);
    //this.todoService.addTodo(this.newTodo, this.todoItem);
    //this.todoService.addTodo(this.newTodo).then(value => this.newTodo = value)
  }

  ngOnInit() {
  }
}