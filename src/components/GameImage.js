
import React from "react";

const GameImage = props => (
  <div className="m-3">
    <img src={props.imgSrc} name={props.imgSrc.split('media/').pop().split('.').shift()} alt="Game Object" onClick={props.handleClickEvent} />
  </div>
);

export default GameImage;
