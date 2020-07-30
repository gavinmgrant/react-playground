import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`/SOMETHING/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`/SOMETHING/props-states`}>Props States</Link>
                    </li>
                </ul>
            </div>
        )
    }
}