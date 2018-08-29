import React, { Component } from 'react';
import './App.css';
import PlayArea from './components/PlayArea.js';
import Message from './components/Message.js';

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

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    imgArr: [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard],
    correct: null
  }

  updateScores = async () => {
    await this.setState({
      currentScore: this.state.currentScore + 1,
      correct: true
    });
    if (this.state.currentScore > this.state.highScore) {
      this.setState({
        highScore: this.state.currentScore
      });
    }
    if (this.state.currentScore === this.state.imgArr.length) {
      // render win message
    }
  }

  resetScores = () => {
    this.setState({
      currentScore: 0,
      correct: false
    });
  }

  shuffleImages = () => {
    let tempArr = this.state.imgArr;
    for (let i = tempArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    this.setState({
      imgArr: tempArr
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <header className="col d-flex flex-column py-4 text-light">
            <h1 className="m-auto">Memory Game - D&D Style</h1>
            <h2 className="m-auto">Choose unique characters to earn points.</h2>
          </header>
        </div>
        <div className="row">
          <nav className="col d-flex flex-column py-4 text-light game-info">
            <div className="d-flex flex-row flex-wrap mx-auto">
              <h3 className="mx-3">Current Score: {this.state.currentScore}</h3>
              <h3 className="mx-3">High Score: {this.state.highScore}</h3>
            </div>
            <Message correct={this.state.correct} />
          </nav>
        </div>
        <PlayArea imgArr={this.state.imgArr} updateScores={this.updateScores} resetScores={this.resetScores} shuffleImages={this.shuffleImages} />
        <footer className="row p-5"></footer>
      </div>
    );
  }
}

export default App;
