/**
 * Created by ashraful on 7/5/17.
 */


import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-content">
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">ALL</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">IN PROGRESS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">COMPLETED</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;