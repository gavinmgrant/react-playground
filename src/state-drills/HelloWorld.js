import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { who: 'World' }
    }

    clickFriend = () => {
        this.setState({ who: 'Friend' })
    }

    clickReact = () => {
        this.setState({ who: 'React' })
    }

    clickWorld = () => {
        this.setState({ who: 'World' })
    }

    render() {
        return (
            <div>
                <p>Hello {this.state.who}</p>
                <button onClick={this.clickFriend}>
                    Friend
                </button>
                <button onClick={this.clickReact}>
                    React
                </button>
                <button onClick={this.clickWorld}>
                    World
                </button>
            </div>
        )
    }
}

export default HelloWorld