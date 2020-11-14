import React, { Component } from 'react';

class Timer extends Component {
  constructor(props : any) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
 	      isOn: false
    };
  }

  startTimer() {
    console.log('Starting timer.');
  }

  stopTimer() {
    console.log('Stopping timer.');
  }

 resetTimer() {
    console.log('Resetting timer.');
  }

  render = () => {
    return <div className="timer-container" />;
  };
}

export default Timer;