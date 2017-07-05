/**
 * Created by ashraful on 7/5/17.
 */


import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-content">
                <nav className="navbar navbar-toggleable-md navbar-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto mr-auto">

                            {/*{this.props.options.items.map(item =>*/}
                                {/*<li className="nav-item"*/}
                                    {/*key={item.id}> /!* map require unique key. So, I just put. Nothing special *!/*/}
                                    {/*<NavLink className="nav-link" activeClassName="active" to={item.url}>*/}
                                        {/*{item.name}*/}
                                    {/*</NavLink>*/}
                                {/*</li>*/}
                            {/*)}*/}
                            <li>All</li>
                            <li>In Progress</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;