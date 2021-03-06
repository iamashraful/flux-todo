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
            },
            {
                id: 3,
                text: 'Finish up quickly',
                isCompleted: true,
                isInProgress: false
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

    // This methods will be a little bit inefficient. But nothing to with any library or something else.
    // Because I can't query over a raw JSON.
    getIndexById(id) {
        /**
         * This is simple filtering process for getting exact object for a specific id.
         * The algorithm might be O(n). It's inefficient. So, I have plan to move on API.
         * This store is static. Definitely it should not be static anymore.
         */
        let index = undefined;
        for (let i=0; i<this.todos.length; i++) {
            if(this.todos[i].id === id) {
                index = i;
                break;
            }
            i += 1;
        }
        return index
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
        let index = this.getIndexById(id);
        if(index !== undefined) {
            let task = this.todos[index];
            task.id = id;
            task.text = text;
            task.isCompleted = isCom;
            task.isInProgress = isInp;

            // Now assign back to todos
            this.todos[index] = task;
        }
        // Response to components for store change
        this.emit("change");
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
            case "UPDATE_TODO":
                this.updateTodo(action.id, action.text, action.isCom, action.isInp);
                break;
            default:
                console.log('No specified action');
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;