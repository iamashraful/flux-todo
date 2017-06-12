/**
 * Created by ashraful on 6/13/17.
 */

import EventEmitter from 'events'

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

    // get all todos
    getALl() {
        return this.todos;
    }
}

const todoStore = new TodoStore();
export default todoStore;