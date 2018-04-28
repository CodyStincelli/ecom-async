import React, { Component } from 'react';
import axios from 'axios';
import Shopping_Cart from './Shopping_Cart';
import Nav from './Nav';

export default class Added_Item extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            quantity: 0,
            id: 0
        }
    }
    componentDidMount(){
        this.setState({name: this.props.props.name,
                       price: +this.props.props.price,
                       quantity:+this.props.props.quantity,
                       id: +this.props.props.id})
    }
    render(){
        console.log(this)
    return(
    <div>
        <h2>{this.state.name}</h2>
        <p>{`Price: ${this.state.price * this.state.quantity} $`}</p>
        <p>{`Quantity: ${this.state.quantity}`}</p>
        <button onClick={() => {axios.delete('/api/delete/:id', {params: {id: this.state.id} });this.setState({quantity:0, price:0, name:'', id:0}) }}>Delete All From Cart</button>
        <input onBlur={(e) => {axios.put('/api/add/:id', {params:{id: this.state.id, quantity:e.target.value}}), this.setState({quantity: e.target.value}); e.target.value = ''}}/>
    </div>
    )
}
}