import React, { Component } from 'react';
import axios from 'axios';
import Added_Item from './Added_Item'

export default class Shopping_Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }
    componentDidMount(){
        this.getProducts()
    }
    getProducts(){
        let array = []
        axios.get('/api/products').then((req, res) =>{
            console.log(req.data)
            req.data.forEach(element =>{ array.push(element)
            this.setState({cart: array})
              }
          )
      })}
    render(){
        console.log(this.state.cart)
        let JSX = this.state.cart.map((x) =>{
            return(
                <Added_Item props={{name:x.product_name, price:x.price, quantity:x.quantity, id:x.item_id}}/>
            )
        })
        return(
    <div>
        <h1>Shopping cart</h1>
        <button onClick={() => this.getProducts()}>Load</button>
        {JSX}
        <button onClick={() => {axios.get('/api/purchase'); this.getProducts()}}> purchase</button>
    </div>
        )
    }
}