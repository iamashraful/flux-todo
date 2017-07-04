/**
 * Created by ashraful on 6/13/17.
 */

import React, {Component} from "react";

class Todo extends Component {
    render() {
        return (
            <div>
                <li>
                    <input type="checkbox"/>
                    {this.props.item}
                </li>
            </div>
        )
    }
}

export default Todo;
