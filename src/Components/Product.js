import React, { Component } from 'react';
import axios from 'axios';

export default function({props}){
    console.log(props)
    let useID = props.itemID
    return(
    <div>
        <h1>{props.name}</h1>
        <button onClick={(props) => axios.post('/api/product', {id: useID, quantity:1} ) }>add</button>
        <button onClick={(props) => axios.delete('/api/delete/:id', {params: {id: useID} } ) }>Delete All From Cart</button>
        <input onBlur={(e, props) => {axios.put('/api/add/:id', {params:{id: useID, quantity:e.target.value}}), e.target.value = ''}}/>
      </div>
    )
}