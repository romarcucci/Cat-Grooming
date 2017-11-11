import React, { Component } from 'react';
import '../App.css';

export default class Message extends Component {
    
    render(){
        return(
            <div>
                <h2>Prendre rendez-vous</h2>
                <p>Merci {this.props.meeting.firstname}, votre rdv le {this.props.meeting.date} à {this.props.meeting.time} est confirmé</p>
                <img src={require('./img/map.png')} className="map-image" alt='map' />
            </div>
        )
    };
}