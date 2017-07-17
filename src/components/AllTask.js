/**
 * Created by ashraful on 7/6/17.
 */

import React, {Component} from 'react';
import Todo from '../components/Todo';
import TodoStore from "../store/TodoStore";

class AllTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAllTasks(),
        }
    }

    componentWillMount() {
        // This function will fire up when store will change
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAllTasks()
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
                {todos.length > 0 ? TodoComponent:<p>No Tasks Found</p>}
            </div>
        )
    }
}

export default AllTask;