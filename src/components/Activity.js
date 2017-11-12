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
      './img/griffes.jpg',
      './img/long.jpg',
      './img/court.jpg',
      './img/vernis.jpg',
      './img/massage.jpg'
    ];
    return(
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="activity col-xl-6 col-lg-8 col-md-10 col-sm-12 col-xl-offset-3 col-lg-offset-2 col-md-offset-1">
            <div className="row">
              <span className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <img 
                  src={require(''+images[this.props.id])} 
                  className="activity-image" 
                  alt={names[this.props.id]} />
              </span>
              <span className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <span className="activity-name">
                  {names[this.props.id]} 
                </span>
              </span>
              <span className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <span className="activity-price">
                  {prices[this.props.id]} €
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}