import React, { Component } from 'react';
import '../App.css';

export default class Activity extends Component {
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