import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.clicks}</h1>
                <button onClick={this.props.onClick}>
                    Add 1
                </button>
                <br />
                <button onClick={this.props.onClickSub}>
                    Sub 1
                </button>
            </div>
        )
    }
}