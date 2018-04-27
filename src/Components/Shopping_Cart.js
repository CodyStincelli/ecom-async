import React, { Component } from 'react';
import axios from 'axios';

export default class Shopping_Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            quantity: 0,
            cart: [],
            amount: []
        }
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts(){
        let array = []
        let array2 =[]
        axios.get('/api/products').then((req, res) =>{
          console.log(req.data)
          req.data.forEach(element =>{ array.push(element.product_name), array2.push(element.quantity)})
          this.setState({cart: array,
                         amount: array2})
            }
        )
    }
    render(){
        return(
    <div>
        <h1>Shopping cart</h1>
        <button onClick={() => this.getProducts()}>Load</button>
        <div>{this.state.cart[0]}   {this.state.amount[0]}</div>
        <div>{this.state.cart[1]}   {this.state.amount[1]}</div>
        <div>{this.state.cart[2]}   {this.state.amount[2]}</div>
        <div>{this.state.cart[3]}   {this.state.amount[3]}</div>
        <div>{this.state.cart[4]}   {this.state.amount[4]}</div>
        <button onClick={() => {axios.get('/api/purchase'); this.getProducts()}}> purchase</button>
    </div>
        )
    }
}