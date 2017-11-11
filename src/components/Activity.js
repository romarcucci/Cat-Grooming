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
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="activity col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <span className="activity-name col-xl-10 col-lg-10 col-md-10 col-sm-10">
                {names[this.props.id]} 
              </span>
              <span className="activity-price col-xl-2 col-lg-2 col-md-2 col-sm-2">
                {prices[this.props.id]} €
              </span>
            </div>
            <div className="row">
              <img 
                src={require(''+images[this.props.id])} 
                className="activity-image col-xl-12 col-lg-12 col-md-12 col-sm-12" 
                alt={names[this.props.id]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}