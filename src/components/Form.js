import React, { Component } from 'react';
import '../App.css';
import Message from './Message.js';

export default class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showForm: true,
        showMessage: false,
        firstname: '',
        lastname: '',
        date: null,
        time: null,
        poil: 'short',
        griffes: false,
        toilettage: false,
        vernis: false,
        massage: false,
        price: 0
      };
  
      this.test = 0;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    calculPrice(){
      var price = 0;
      if(this.state.griffes){price += 15;}
      if(this.state.toilettage){
        this.state.poil === 'long' ? price += 70 : price += 50
      };
      if(this.state.vernis){price += 25;}
      if(this.state.massage){price += 30;}
      return price;
    }
  
    handleChange (event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked :target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      })
  
      this.setState({
        price: this.calculPrice()
      }, () => {
          console.log(this.state.price);
      })
    }
    
    handleSubmit(event) {
      event.preventDefault();
      this.setState({    
        price: this.calculPrice()
      });
      this.setState({showForm: false, showMessage:true});
    }
  
  
    render(){
  
  
  
      return(
        <div>
          { this.state.showMessage ? <Message meeting={this.state}/> : null }
          { this.state.showForm ?  
            <div>
              <h2>Prendre rendez-vous</h2>
              <form align="center" onSubmit={this.handleSubmit}>
                Prenom: <br/>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} required/>
                <br/> 
                Nom:<br/>
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} required/>
                <br/>
                Horaire:<br/>
                <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required/>
                <input type="time" name="time" value={this.state.time} onChange={this.handleChange} required/>
                <br/>
                Telephone:<br/>(+33)
                <input type="tel" onChange={this.handleChange} pattern="^\d{9}$" required/>
                <br/>
                e-mail:<br/>
                <input type="email" name="email" onChange={this.handleChange} required/>
                <br/>
                Traitements:
                <br/>
                Couper les griffes<input type="checkbox" name="griffes" onClick={this.handleChange}/><br/>
                Toilettage<input type="checkbox" name="toilettage" onClick={this.handleChange}/><br/>
                Vernis<input type="checkbox" name="vernis" onClick={this.handleChange}/><br/>
                Massage<input type="checkbox" name="massage" onClick={this.handleChange}/>
                <br/>
                Taille poils:
                <br/>
                <input type="radio" name="poil" value="long" onClick={this.handleChange}/> Long
                <input type="radio" name="poil" value="short" onClick={this.handleChange}/> Court    
                <br/><br/>
                <input type="submit" value="Valider rendez-vous"/>
              </form>
            </div> 
          : null }
          <div className="">
            <p>{this.state.price} €</p>
          </div>
        </div>
      )
    }
  }
  
  