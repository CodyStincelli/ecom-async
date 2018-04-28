import React, { Component } from 'react';
import axios from 'axios';

export default function({props}){
    console.log(props)
    let useID = props.itemID
    return(
    <div>
        <h1>{props.name}</h1>
        <button onClick={(props) => axios.post('/api/product', {id: useID, quantity:1} ) }>add</button>
      </div>
    )
}