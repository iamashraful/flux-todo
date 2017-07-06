/**
 * Created by ashraful on 7/5/17.
 */


import React, {Component} from 'react';
import TodoStore from '../store/TodoStore';
import {
    HashRouter,
    Route,
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom';
class Navbar extends Component {
    render() {
        const navItems = TodoStore.navItems;

        return (
            <HashRouter>
                <div>
                    <div className="nav-content">
                        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                <ul className="navbar-nav ml-auto mr-auto">
                                    {navItems.map(item =>
                                        <li className="nav-item"
                                            key={item.id}> {/* map require unique key. So, I just put. Nothing special */}
                                            <NavLink className="nav-link" activeClassName="active" to={item.url}>
                                                {item.text}
                                            </NavLink>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Always start with /home */}
                    <Redirect from="/" to="/all"/>

                    {/* Defining Route */}
                    <Switch>
                        {
                            navItems.map(item =>
                                <Route exact path={item.url} component={item.component} key={item.id}/>
                            )
                        }
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Navbar;