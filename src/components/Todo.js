/**
 * Created by ashraful on 6/13/17.
 */

import React, {Component} from 'react';

class Todo extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div>
                <li>{this.props.item}</li>
            </div>
        )
    }
}

export default Todo;
