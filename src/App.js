import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
      height: window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight
    });
  }

  render() {
    const {
      width, height
    } = this.state;

    return (
      <div className="App">
        <h2>{width} x {height}</h2>
      </div>
    );
  }
}

export default App;
