import React, { Component } from 'react';
import axios from 'axios';
import Shopping_Cart from './Shopping_Cart';
import Nav from './Nav';

export default class Cart extends React.Component{
    render(){
    return(
    <div>
        <Nav />
        <Shopping_Cart />
    </div>
    )
}
}