import React, { Component } from 'react';
import '../App.css';
import Activity from './Activity.js';

export default class Activities extends Component {
    
    render(){
        const numbers = [0,1,2,3,4];
        return(
            <div className="activities">
                <h2>Nos Activités</h2>
                {numbers.map(function(number, index){
                    return <Activity key={index} id={number}/>
                })}
            </div>
        )
    }
}
    
    