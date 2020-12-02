import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      darkMode: false
    }
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.darkMode ? 'darkMode' : ''}>
          <h1 >Light Modes</h1>

          <button onClick={this.darkMode}>Dark</button>
        </div>
      </div>
    )};

    darkMode = () => {
      this.setState({darkMode: !this.state.darkMode});
    }
}

export default App;
