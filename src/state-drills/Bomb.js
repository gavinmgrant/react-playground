import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tickTockBoom() {
        if (this.state.count % 2 === 0 && this.state.count % 8 !== 0) {
            return 'tick';
        }
        if (this.state.count % 2 !== 0) {
            return 'tock'
        }
        if (this.state.count % 8 === 0) {
            return 'BOOM!!!!'
        }
    }

    render() {
        console.log(this.state.count)
        return (
            <div>{this.tickTockBoom()}</div>
        )
    }
}
    
export default Bomb
