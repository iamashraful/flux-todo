/**
 * Created by ashraful on 7/2/17.
 */

import React, {Component} from "react";


class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', errorMessage: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(event) {
        /* Basically newStatus was passed by props. Here, it will send status boll value to this props.
           depending that props it will update parent state.
         */
        this.props.newStatus(true);
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        const value = this.state.value;
        if (value.length <= 0) {
            this.setState({errorMessage: 'Empty submission is not allowed!!'});
        }
        else if (value.length < 5) {
            this.setState({errorMessage: 'Too small keyword may not understandable!!'});
        }
        else {
            this.setState({errorMessage: ''});
            this.props.getTask(this.state.value);
        }
        event.preventDefault();
    }

    render() {
        const cssClass = "todo-input " + (this.state.errorMessage ? 'error' : '');
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className={cssClass}
                    placeholder="Write here..."
                    onChange={this.updateState}
                    {/* Based on added status value will be changed */}
                    value={this.props.added ? '':this.state.value}
                />
                <p className="error-text">{this.state.errorMessage}</p>
            </form>
        )
    }
}

export default InputForm;