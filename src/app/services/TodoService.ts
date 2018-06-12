import {Todo} from '../Model/Todo';
import TodoApi from './TodoApi';
import {Injectable} from '@angular/core';

@Injectable()
export default class TodoService {
    constructor(private todoApi: TodoApi) {}
    getTodo(): Promise<Array<Todo>> {
        return this.todoApi.fetchFormation();
    }


    /*addTodo(todo: Todo, todolist: Array<Todo>) {
        let newTodoList: Array<Todo> = todolist;
        newTodoList.push(todo);
        return newTodoList;
    }*/
}