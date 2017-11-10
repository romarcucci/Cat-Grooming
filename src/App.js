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
          <tbody>
          <tr>
            {numbers.map(function(number, index){
              return <td><Activity key={ index } id={ number }  /></td>;
            })}
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class Message extends Component {

  render(){
    return(
      <div>
        <h2>Prendre rendez-vous</h2>
        <p>Merci {this.props.prenom}, votre rdv le {this.props.date} est confirmé</p>
      </div>
    )
  };
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      showMessage: false,
      prenom: '',
      nom: '',
      date: null,


    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showForm: false, showMessage:true});
  }


  render(){
    return(
      <div>
        { this.state.showMessage ? <Message prenom={this.state.prenom} date={this.state.date}/> : null }
        { this.state.showForm ?  
          <div>
            <h2>Prendre rendez-vous</h2>
            <form align="center" onSubmit={this.handleSubmit}>
              Prenom: <br/>
              <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange}/>
              <br/> 
              Nom:<br/>
              <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange}/>
              <br/>
              Date:<br/>
              <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
              <br/>
              Telephone:<br/>
              <input id="phonenum" type="tel" pattern="^\d{10}$" required />
              <br/>
              e-mail:<br/>
              <input type="email" name="email" required placeholder="Enter a valid email address"/>
              <br/>
              Traitements:
              <br/>
              Couper les griffes<input type="checkbox" value="griffes"/>
              Toilettage<input type="checkbox" value="toilettage"/>
              Vernis<input type="checkbox" value="vernis"/>
              Massage<input type="checkbox" value="massage"/>
              <br/>
              Taille poils:
              <br/>
              <input type="radio" name="poil" value="long"/> Long
              <input type="radio" name="poil" value="short"/> Court    
              <br/><br/>
              <input type="submit" value="Valider rendez-vous"/>
            </form>
          </div> 
        : null }
      </div>
    )
  }
}


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
        <Header />        
        { this.state.showActivities ? <Activities /> : null }
        { this.state.showActivities ? <button onClick={() => this.click()}> Prendre rendez-vous</button> : null }      
        { this.state.showForm ? <Form /> : null }
      </div>
    );
  }
}

export default App;
