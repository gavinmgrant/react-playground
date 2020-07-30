import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './nav';

export default class RouterApp extends Component {
    render() {
        return (
            <div>
                <h1>Example Router App</h1>
                    <BrowserRouter>
                        <Switch>
                            <Route path={`/SOMETHING/:topicId`}>
                                <Nav />
                            </Route>
                        </Switch>
                    </BrowserRouter>
            </div>
        );
    }
}