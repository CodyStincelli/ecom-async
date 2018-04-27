import React from 'react';
import {Switch, Route } from 'react-router-dom';
import home from '../Components/Home'
import cart from '../Components/Cart'


export default (
    <Switch>
        <Route exact path ='/' component={home}></Route>
        <Route path='/shop' component={cart}></Route>
    </Switch>
)