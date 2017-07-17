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

        const isCompletedButtonClass = "btn btn-sm " + (
                this.props.item.isCompleted ? "btn-danger" : "btn-outline-danger"
            );
        const completedText = this.props.item.isCompleted ? "Completed" : "Complete";

        // InProgress button will be disabled when task is completed
        const isDisabled = this.props.item.isCompleted;
        const topRowClass = "row list-item " + (
                this.props.item.isCompleted ? "css-del" : ""
            );


        return (
            <div className={topRowClass}>
                <div className="col-md-2 col-sm-2">
                    <button
                        disabled={isDisabled}
                        className={inProgressButtonClass}
                        onClick={this.handleTask.bind(this, this.props.item)}>
                        {progressText}
                    </button>
                </div>
                <div className="col-md-8 col-sm-8 text-left">
                    {this.props.item.text}
                </div>
                <div className="col-md-2 col-sm-2">
                    <button className={isCompletedButtonClass}>
                        {completedText}
                    </button>
                </div>
            </div>
        )
    }
}

export default Todo;
