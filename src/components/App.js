import React, {Component} from "react";

import TodoStore from '../store/TodoStore';
import Todo from './Todo';
import "../assets/css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getALl()
    }
    }

    render() {
        const {todos} = this.state;
        const TodoComponent = todos.map((todo) => {
            return <Todo item={todo.text} key={todo.id}/>
        });

        return (
            <div className="App">
                <h1>Welcome to My TODO Application</h1>
                {TodoComponent}
            </div>
        );
    }
}

export default App;
