require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const bodyParser = require("body-parser");
const axios = require("axios");



const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
 } = process.env;

 const app = express();

app.use(bodyParser.json());
massive(CONNECTION_STRING).then(
   db => app.set("db", db)
); 

app.use(session({
   secret: SESSION_SECRET,
   resave: false,
   saveUninitialized: true
}))

app.post( '/api/product', async( req, res, next ) => {

    const db = req.app.get('db');
    const { id, quantity } = req.body;
    let newQuantity = 0
    let bool = false
    let promise = []
    


    let cart = await db.display_cart()
     
        cart.forEach((element) => {
        if(element.item_id === id){
            newQuantity = element.quantity + 1
            db.update_quantity([element.item_id, newQuantity])
    
           bool = true
        }

    })


    if(bool === false){
        db.add_to_cart([id, quantity]).then(() => console.log('Made a new one'))
    }
})

app.get( '/api/purchase', (req, res, next) => {
    const db = req.app.get('db');

    db.clear_cart()
    .then(() => console.log('thanks for your purchase'))
})


app.get( '/api/products', ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Got All')

    db.display_cart()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  } );

app.put( '/api/add/:id', ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Updated Quantity')
   let updateID = req.body.params.id
   let updateAmount = req.body.params.quantity
    db.display_cart().then(res =>{
        res.forEach(element =>{
            if(element.item_id === updateID){
        newAmount = updateAmount
    db.update_quantity( updateID, newAmount )
      .then( () => console.log('updated amount'))
    }})
  } );
})

app.delete( '/api/delete/:id', ( req, res, next ) => {
    console.log('hitting delete')
    console.log(req.query.id)
    const db = req.app.get('db');
    console.log('Deleted One')

    db.delete_from_cart([ req.query.id ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  } );




const port = SERVER_PORT || 3005
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );