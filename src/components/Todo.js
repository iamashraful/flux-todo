/**
 * Created by ashraful on 6/13/17.
 */

import React, {Component} from "react";

class Todo extends Component {
    render() {
        return (
            <div className="row list-item">
                <div className="col-md-2 col-sm-2">
                    <button className="btn btn-sm btn-outline-success">In Progress</button>
                </div>
                <div className="col-md-8 col-sm-8 text-left">
                    {this.props.item}
                </div>
                <div className="col-md-2 col-sm-2">
                    <button className="btn btn-sm btn-outline-danger">Complete</button>
                </div>
            </div>
        )
    }
}

export default Todo;
