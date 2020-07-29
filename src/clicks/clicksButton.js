import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.clicks}</h1>
                <button onClick={this.props.onClick}>
                    +
                </button>
                <br />
                <button onClick={this.props.onClickSub}>
                    -
                </button>
            </div>
        )
    }
}