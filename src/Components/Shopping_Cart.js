import React, { Component } from 'react';
import axios from 'axios';
import Added_Item from './Added_Item'

export default class Shopping_Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            
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
        <Added_Item props={this.state.array[0]}/>
        <button onClick={() => {axios.get('/api/purchase'); this.getProducts()}}> purchase</button>
    </div>
        )
    }
}