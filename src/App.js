import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Activities from './components/Activities.js';
import Form from './components/Form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActivities: true,
      showForm: false
    };
  }

  click() {
    this.setState({
      showActivities: false,
      showForm: true
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Cat-Grooming</h1>
          <p className="address">11 rue Sextius Michel, 75015 Paris</p>
        </header>
        { this.state.showActivities ? <Activities /> : null }
        { this.state.showActivities ? <button onClick={() => this.click()}> Prendre rendez-vous</button> : null }      
        { this.state.showForm ? <Form /> : null }
      </div>
    );
  }
}

export default App;
