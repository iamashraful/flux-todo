import React, {Component} from "react";

import * as TodoActions from "../actions/TodoActions";
import InputForm from "./InputForm";
import Navbar from "./Navbar";
import "../assets/css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdded: false
        }
    }

    setStatus(val) {
        /**
         * Here, status is isAdded or not. I mean true is successfully added.
         * And then it just get new status like new mode. This is simple to clean old shits from input box.
         */
        if(val) {
            this.setState({isAdded: false});
        }
    }

    getTask(val) {
        TodoActions.createTodo(val);
        this.setState({isAdded: true});
        // A little bit hard coded. But tricky and workable. This is simple to understand.
        // When to task is created and state will navigate to all
        window.location = '/#/all';
    }

    render() {
        return (
            <div className="App">
                <div className="app-nav">
                    <h1>TODO Application</h1>
                    <InputForm
                        getTask={this.getTask.bind(this)}
                        newStatus={this.setStatus.bind(this)}
                        // Sending added=true/false if false then input box remain same.
                        added={this.state.isAdded}
                    />
                </div>
                <Navbar/>
            </div>
        );
    }
}

export default App;
