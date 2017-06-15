import React, {Component} from "react";

import TodoStore from '../store/TodoStore';
import Todo from './Todo';
import "../assets/css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll()
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
            // return Todo component and send item as props
            return <Todo item={todo.text} key={todo.id}/>
        });

        return (
            <div className="App">
                <h1>TODO Application</h1>
                <input className="todo-input" placeholder="Write here..."/>
                <div className="todo">
                    {TodoComponent}
                </div>
            </div>
        );
    }
}

export default App;
