import { Todo } from '../Model/Todo';

export default class TodoApi {
    //private _todoList: Array<Todo>;
    //constructor (todoList: Array<Todo>) {
    //    this._todoList = todoList;
    //}
    fetchFormation():Promise<Array<Todo>> {
        return new Promise((resolve) => {
            resolve([
                new Todo('Faire les courses', true),
                new Todo('Aller au cours d\'AquaPoney', false),
                new Todo('Jouer au Biche Vollée', false)
            ])
        });
    }
    //addTodo(todo: Todo) {
    //    return todolist.push(todo);
    //}
}