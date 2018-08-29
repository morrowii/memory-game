
import React from "react";

class Message extends React.Component {

    changeMessage = () => {
        switch (this.props.correct) {
            case true:
                return "Correct! Keep going!";
            case false:
                return "Incorrect. Try again.";
            default:
                return "Click on a character to get started.";
        }
    }

    render() {
        return (
            <h3 className="mx-auto">
                {this.changeMessage()}
            </h3>
        );
    }
}

export default Message;