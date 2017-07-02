/**
 * Created by ashraful on 7/2/17.
 */

import React, {Component} from 'react';


class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="todo-input" placeholder="Write here..."/>
            </form>
        )
    }
}

export default InputForm;