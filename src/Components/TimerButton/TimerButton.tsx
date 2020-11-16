import React from 'react';
import './TimerButton.css';

const TimerButton = (props:any) => (
  <div className="button-container" onClick={() => props.buttonAction()}>
    <p className="button-value btn btn-outline-danger">{props.buttonValue}</p>
  </div>
);

export default TimerButton;
