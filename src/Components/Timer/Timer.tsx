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



  render = () => {
    return <div className="timer-container" />;
  };
}

export default Timer;