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
            date: '',
            time: '',
            poil: 'short',
            griffes: false,
            toilettage: false,
            vernis: false,
            massage: false,
            price: 0
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    formatDate(date) {      
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return year + "-" + month + "-" + day;
    }

    calculPrice(){
        let p = 0;
        this.state.griffes ? p += 15 : null;
        this.state.toilettage ? (this.state.poil === 'long' ? p += 70 : p += 50) : null; 
        this.state.vernis ? p += 25 : null;
        this.state.massage ? p += 30 : null;
        return p;
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({price: this.calculPrice()});
        this.setState({showForm: false, showMessage:true});
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render(){

        return(
            <div>
                { this.state.showMessage ? <Message meeting={this.state}/> : null }
                { this.state.showForm ?  
                <div className="formulaire col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <h2>Prendre rendez-vous</h2>
                    <form align="center" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Prenom</label>
                                    <input type="text" name="firstname" className="form-control" value={this.state.firstname} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" name="lastname" className="form-control" value={this.state.lastname} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label>Horaire (9:30 à 18:30)</label>
                                    <input type="time" name="time" className="form-control" min="09:30:00" max="18:30:00" value={this.state.time} onChange={this.handleChange} required/>
                                    <input type="date" name="date" className="form-control" min={this.formatDate(new Date())} value={this.state.date} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label>Telephone (+33)</label>
                                    <input type="tel" className="form-control" onChange={this.handleChange} pattern="^\d{9}$" required/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>e-mail</label>
                                    <input type="email" name="email" className="form-control" onChange={this.handleChange} required/>
                                </div>
                                <div className="form-check">
                                    <label>Traitements:</label><br/>
                                    <label className="check-label">
                                        <input type="checkbox" className="form-check-input" name="griffes" onClick={this.handleChange}/> Couper les griffes - 15€
                                    </label><br/>
                                    <label className="check-label">
                                        <input type="checkbox" className="form-check-input" name="toilettage" onClick={this.handleChange}/> Toilettage - {this.state.poil==='long' ? 70 : 50 }€
                                    </label><br/>
                                    <label className="check-label">
                                        <input type="checkbox" className="form-check-input" name="vernis" onClick={this.handleChange}/> Vernis - 25€
                                    </label><br/>
                                    <label className="check-label">
                                        <input type="checkbox" className="form-check-input" name="massage" onClick={this.handleChange}/> Massage - 30€
                                    </label>
                                </div><br/>
                                <div className="form-check">
                                    <label>Poil:</label><br/>
                                    <label className="check-label">
                                        <input className="form-check-input" type="radio" name="poil" value="long" onClick={this.handleChange}/> Long
                                    </label><br/>
                                    <label className="check-label">
                                        <input className="form-check-input" type="radio" name="poil" value="short" onClick={this.handleChange}/> Court
                                    </label>
                                </div>
                            </div>
                        </div><br/><br/>
                        <input className="btn-lg btn-basic" type="submit" value="Valider rendez-vous"/>
                    </form>
                </div> : null }
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <div className="cart">
                        <h3>Panier</h3>
                        <img src={require('./img/paper-bag.svg')}/>
                        <h4>Total: {this.calculPrice()} €</h4>
                        {this.state.griffes ? <h5>Couper les griffes</h5> : null}
                        {this.state.toilettage ? (this.state.poil==='long' ? <h5>Toilettage poils long</h5> : <h5>Toilettage poils court</h5>) : null}
                        {this.state.vernis ? <h5>Vernis</h5> : null}
                        {this.state.massage ? <h5>Massage</h5> : null}
                    </div>
                </div>
            </div>
        )
    }
}

