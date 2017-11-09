import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Header extends Component {
  render() {
    return(
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Cat-Grooming</h1>
          <p className="address">11 rue Sextius Michel, 75015 Paris</p>
        </header>
  )};
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
