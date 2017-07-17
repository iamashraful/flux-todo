/**
 * Created by ashraful on 7/6/17.
 */

import React, {Component} from 'react';
import Todo from '../components/Todo';
import TodoStore from "../store/TodoStore";

class CompletedTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getCompletedTasks(),
        }
    }

    componentWillMount() {
        // This function will fire up when store will change
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getCompletedTasks()
            });
        });
    }

    render() {
        const {todos} = this.state;  // get the todos state and copy to todos
        const TodoComponent = todos.map((todo) => {
            if (todo.isCompleted)
                return <del><Todo item={todo.text} key={todo.id}/></del>;
            else
                return <Todo item={todo.text} key={todo.id}/>
        });

        return (
            <div className="todo">
                {todos.length > 0 ? TodoComponent:<p>You haven't any completed task.</p>}
            </div>
        )
    }
}

export default CompletedTask;