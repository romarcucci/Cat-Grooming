import React, { Component } from 'react';
import '../App.css';

export default class Message extends Component {
    
    render(){
        return(
            <div className="message">
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <div className="formulaire">
                        <h2>A bientôt!</h2>
                        <p className="remerciement">Merci {this.props.meeting.firstname}, votre rdv le {this.props.meeting.date} à {this.props.meeting.time} est confirmé!</p>
                        <img src={require('./img/map.png')} className="map-image" alt='map' />
                    </div>
                </div>
            </div>
        )
    };
}