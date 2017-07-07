import React, {Component} from "react";

import * as TodoActions from "../actions/TodoActions";
import InputForm from "./InputForm";
import Navbar from "./Navbar";
import "../assets/css/App.css";

class App extends Component {
    getTask(val) {
        TodoActions.createTodo(val);
        // A little bit hard coded. But tricky and workable. This is simple to understand.
        // When to task is created and state will navigate to all
        window.location = '/#/all';
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
