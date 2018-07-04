import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage.js';
import NavTabs from './navtabs.js'


class App extends Component {
  render() {
    return (
      <div className="App">

       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Thanks for stopping by</h1>
        </header>
          <NavTabs/>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
