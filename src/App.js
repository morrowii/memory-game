import React, { Component } from 'react';
import './App.css';
import PlayArea from './components/PlayArea.js';

import barbarian from './images/barbarian.png';
import bard from './images/bard.png';
import cleric from './images/cleric.png';
import druid from './images/druid.png';
import fighter from './images/fighter.png';
import monk from './images/monk.png';
import paladin from './images/paladin.png';
import ranger from './images/ranger.png';
import rogue from './images/rogue.png';
import sorcerer from './images/sorcerer.png';
import warlock from './images/warlock.png';
import wizard from './images/wizard.png';

const imgArr = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard];

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0
  }

  updateScores = async () => {
    await this.setState({
      currentScore: this.state.currentScore + 1
    });
    if (this.state.currentScore > this.state.highScore) {
      this.setState({
        highScore: this.state.currentScore
      });
    }
    if (this.state.currentScore === imgArr.length) {
      // render win message
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <header className="col d-flex py-5 bg-dark text-light">
            <h1 className="mx-auto">Memory Game - D&D Style</h1>
          </header>
        </div>
        <div className="row">
          <nav className="col d-flex flex-row py-5 bg-danger justify-content-center text-light">
            <h2 className="mx-5">Current Score: {this.state.currentScore}</h2>
            <h2 className="mx-5">High Score: {this.state.highScore}</h2>
          </nav>
        </div>
        <PlayArea imgArr={imgArr} updateScores={this.updateScores} />
        <footer className="row p-5 bg-dark"></footer>
      </div>
    );
  }
}

export default App;
