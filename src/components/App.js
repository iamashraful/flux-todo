import React, {Component} from "react";

import * as TodoActions from "../actions/TodoActions";
import InputForm from "./InputForm";
import Navbar from "./Navbar";
import "../assets/css/App.css";

class App extends Component {
    getTask(val) {
        TodoActions.createTodo(val);
    }

    render() {
        return (
            <div className="App">
                <div className="app-nav">
                    <h1>TODO Application</h1>
                    <InputForm getTask={this.getTask.bind(this)}/>
                </div>
                <Navbar/>
            </div>
        );
    }
}

export default App;
