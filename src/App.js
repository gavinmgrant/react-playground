import React, { Component } from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun bulletInChamber={8}/>
      </div>
    );
  }
}

export default App;