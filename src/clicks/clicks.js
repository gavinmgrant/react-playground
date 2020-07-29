import React, { Component } from 'react';
import Button from './clicksButton';

class Clicks extends Component {
    constructor(props) {
        super(props);
        this.state = { totalClicks: 0 };
    }

    handleClicks = () => {
        const total = this.state.totalClicks;
        this.setState ({ totalClicks: total + 1 });
    }

    handleSub = () => {
        const total = this.state.totalClicks;
        this.setState ({ totalClicks: total - 1});
    }

    render() {
        return (
            <Button 
                onClick={this.handleClicks} 
                onClickSub={this.handleSub} 
                clicks={this.state.totalClicks} />
        )
    }
}

export default Clicks;