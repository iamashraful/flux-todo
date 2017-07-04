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
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        const value = this.state.value;
        if (value.length <= 0) {
            this.setState({errorMessage: 'Empty submission is not allowed!!'})
        }
        else {
            this.setState({errorMessage: ''});
            // console.log(this.state);
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
                    value={this.state.value}
                />
                <p className="error-text">{this.state.errorMessage}</p>
            </form>
        )
    }
}

export default InputForm;