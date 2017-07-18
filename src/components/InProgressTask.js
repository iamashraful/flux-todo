/**
 * Created by ashraful on 7/6/17.
 */

import React, {Component} from 'react';
import Todo from '../components/Todo';
import TodoStore from "../store/TodoStore";

class InProgressTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getInProgressTasks(),
        }
    }

    componentWillMount() {
        // This function will fire up when store will change
        TodoStore.on("change", () => {
            const inProgressTasks = TodoStore.getInProgressTasks();
            this.setState({
                todos: inProgressTasks
            });
        });
    }

    render() {
        const {todos} = this.state;  // get the todos state and copy to todos
        const TodoComponent = todos.map((todo) => {
            return <Todo item={todo} key={todo.id}/>
        });

        return (
            <div className="todo">
                {todos.length > 0 ? TodoComponent:<p>You are not dealing with any task.</p>}
            </div>
        )
    }
}

export default InProgressTask;