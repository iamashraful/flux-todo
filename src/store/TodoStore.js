/**
 * Created by ashraful on 6/13/17.
 */

import EventEmitter from 'events';
import dispatcher from '../dispatcher';


class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1,
                text: 'Test TODO',
                isCompleted: false,
                isInProgress: false
            },
            {
                id: 2,
                text: 'Create REACT App',
                isCompleted: true,
                isInProgress: false
            }
        ]
    }

    // Feature for creating new todo
    createTodo(text, isCom=false) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            isCompleted: isCom,
            isInProgress: false
        });

        // Response to components for store change
        this.emit("change");
    }

    // get all todos
    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch(action.type){
            case "CREATE_TODO":
                this.createTodo(action.text);
                break;
            default:
                console.log('No specified action');
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;