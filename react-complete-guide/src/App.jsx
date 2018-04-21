import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './component/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 22 },
      { name: 'Tonman', age: 15 }
    ],
    otherState: 'Other Value',
    switchNameStatus : false
  }

  switchNameHandeler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 22 },
        { name: 'Tonman', age: 16 }
      ]
    })
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 22 },
        { name: 'Tonman', age: 35 }
      ]
    });
  }
  
  toggleNameHandler = () =>{
    const currentStatus = this.state.switchNameStatus;
    this.setState({switchNameStatus : !currentStatus})
  }

  render() {
    const style = {
      backgroundColor :  'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          /* <button onClick={this.switchNameHandeler.bind(this,' Tonman Neverwalk alone')}>Switch Name</button> */
          /*<button style={style} onClick={() => this.switchNameHandeler('Tonman Neverwalk alone')}>Switch Name</button>*/
        }
        <button style={style} onClick={this.toggleNameHandler}>Switch Name</button>
        { 
          this.state.switchNameStatus === true ? 
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
                  click={() => this.switchNameHandeler('Tonman Haha')} 
                  change={this.nameChangeHandler} />
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> 
            </div> : null
        }
      </div>
    );
  }
}

export default App;
