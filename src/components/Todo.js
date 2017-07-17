/**
 * Created by ashraful on 6/13/17.
 */

import React, {Component} from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleTask(task) {
        console.log(task);
    }

    render() {
        // Inline constants
        const inProgressButtonClass = "btn btn-sm " + (
                this.props.item.isInProgress ? "btn-success" : "btn-outline-success"
            );
        const progressText = this.props.item.isInProgress ? "In Progress" : "Progress";

        return (
            <div className="row list-item">
                <div className="col-md-2 col-sm-2">
                    <button
                        className={inProgressButtonClass}
                        onClick={this.handleTask.bind(this, this.props.item)}>
                        {progressText}
                    </button>
                </div>
                <div className="col-md-8 col-sm-8 text-left">
                    {this.props.item.text}
                </div>
                <div className="col-md-2 col-sm-2">
                    <button className="btn btn-sm btn-outline-danger">Complete</button>
                </div>
            </div>
        )
    }
}

export default Todo;
