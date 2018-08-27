
import React from "react";
import GameImage from './GameImage.js';

let chosenImages = [];

class PlayArea extends React.Component {

    handleClickEvent = async event => {
        await this.updateChoices(event);
        this.props.updateScores();
    }
    
    updateChoices = event => {
        let currentChoice = event.target.name;
        if (chosenImages.indexOf(currentChoice) === -1) {
            chosenImages.push(currentChoice);
        }
        else {
            this.gameOverRestart();
        }
    }

    gameOverRestart = () => {
        // reset current score and shuffle images (make sure images are shuffled initially)
    }

    render() {
        return (
            <main className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex flex-wrap p-3 justify-content-center">
                    {
                        this.props.imgArr.map(img => {
                            return <GameImage imgSrc={img} key={img} handleClickEvent={this.handleClickEvent} />
                        })
                    }
                </div>
                <div className="col-2"></div>
            </main>
        );
    }
}

export default PlayArea;
