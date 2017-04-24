import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const current_word = {
      word: 'Code Injection'
    };


    return (
      <div className="App">
        <div className="progress-bar">{this.state.date.toLocaleTimeString()}</div>
        <div className="word-content">
          <h1>{current_word.word}</h1>
          <div className="divide-line"></div>
        </div>
        
      </div>
    );
  }

}

export default App;
