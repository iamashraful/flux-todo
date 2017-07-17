/**
 * Created by ashraful on 6/13/17.
 */

import EventEmitter from "events";
import dispatcher from "../dispatcher";
import AllTask from '../components/AllTask';
import InProgressTask from '../components/InProgressTask';
import CompletedTask from '../components/CompletedTask';

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
                isInProgress: true
            }
        ];
        this.navItems = [
            {
                id: 1,
                text: 'All',
                url: '/all',
                component: AllTask
            },
            {
                id: 2,
                text: 'In Progress',
                url: '/in-progress',
                component: InProgressTask
            },
            {
                id: 3,
                text: 'Completed',
                url: '/completed',
                component: CompletedTask
            },
        ];
    }

    // Feature for creating new todo
    createTodo(text, isCom = false, isInp=false) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            isCompleted: isCom,
            isInProgress: isInp
        });

        // Response to components for store change
        this.emit("change");
    }

    // Feature for updating todo
    updateTodo(id, text, isCom, isInp) {

    }

    // get all todos
    getAllTasks() {
        return this.todos;
    }

    // get in progress todos
    getInProgressTasks() {
        let todos = [];
        this.todos.forEach(function (item) {
            if(item.isInProgress) {
                todos.push(item);
            }
        });
        return todos;
    }

    // get in completed todos
    getCompletedTasks() {
        let todos = [];
        this.todos.forEach(function (item) {
            if(item.isCompleted) {
                todos.push(item);
            }
        });
        return todos;
    }

    handleActions(action) {
        switch (action.type) {
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
export default todoStore;