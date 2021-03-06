import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                <span
                        className="badge badge-pill">
                        {this.props.totalCounters ? this.props.totalCounters : ''}
                    </span>
                </a>
            </nav>
        );
    }
}

export default Navbar;