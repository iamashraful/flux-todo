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
            todos: TodoStore.getAll(),
        }
    }

    componentWillMount() {
        // This function will fire up when store will change
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
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
                {TodoComponent}
            </div>
        )
    }
}

export default AllTask;