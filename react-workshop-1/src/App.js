import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/user-input';
import UserOutput from './components/user-output';
class App extends Component {
  state = {
    userName: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput change={this.textChange} currentUserName={this.state.userName}></UserInput>
        <UserOutput val1={this.state.userName} val2="I'm like you so much."></UserOutput>
      </div>
    );
  }

  textChange = (event) =>{
    this.setState({
      userName : event.target.value
    })
  }
}



export default App;
