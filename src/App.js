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

class Activity extends Component {
  render() {
    const names = [
      'Couper griffes', 
      'Toilettage poils long', 
      'Toilettage poils court',
      'Vernissage',
      'Massage'];
    const prices = [15, 70, 50, 25, 30];
    const images = [
      './img/griffes.png',
      './img/long.png',
      './img/court.png',
      './img/vernis.png',
      './img/massage.png'
    ];
    return(
      <div className="activity">
        <span className="activity-name">
          {names[this.props.id]} 
        </span>
        <span className="activity-price">
          {prices[this.props.id]} €
        </span>
        <img src={require(''+images[this.props.id])} className="activity-image" alt={names[this.props.id]} />
      </div>
  )};
}

class Activities extends Component {

  render(){
    const numbers = [0,1,2,3,4];
    return(
      <div className="activities">
        <h2>Nos Activités</h2>
        <table align="center">
          <tr>
            {numbers.map(function(number, index){
              return <td><Activity id={ index } /></td>;
            })}
          </tr>
        </table>
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bttnText: "Prendre rendez-vous"
    };
}
  render() {
    return (
      <div className="App">
        <Header />
        <Activities />
        <button> {this.state.bttnText}</button>
      </div>
    );
  }
}

export default App;
