import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        step: 2,
    };

    constructor(props) {
        console.log('prop in constructor', props)
        super(props)
        this.state = { count: this.props.step }
    }
    
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState({ count: this.state.count + this.props.step })
    }
    
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add {this.props.step}
                </button>
            </div>
        )
    }
}

export default Counter