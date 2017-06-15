/**
 * Created by ashraful on 6/13/17.
 */

import EventEmitter from 'events';

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
                isCompleted: false,
                isInProgress: false
            }
        ]
    }

    // Feature for creating new todo
    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            isCompleted: false,
            isInProgress: false
        });

        // Response to components for store change
        this.emit("change");
    }

    // get all todos
    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore();
window.todoStore = todoStore;
export default todoStore;