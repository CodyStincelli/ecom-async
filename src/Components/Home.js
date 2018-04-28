import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <Nav />
      <Product props={{name:'Bread', itemID:1}}/>
      <Product props={{name:'Eggs', itemID:2}}/>
      <Product props={{name:'Flour', itemID:3}}/>
      <Product props={{name:'Bacon', itemID:4}}/>
      <Product props={{name:'Butter', itemID:5}}/>
    </div>
    )
  }
}
export default Home