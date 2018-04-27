module.exports = {
    add_to_cart: ( req, res, next ) => {
      const db = req.app.get('db');
      const { id, quantity } = req.body;
      console.log('Added to Cart')
  
      db.add_to_cart( [id, quantity] )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
    display_cart: ( req, res, next ) => {
      const db = req.app.get('db');
      console.log('Got All')
  
      db.display_cart()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },
  
    update_quantity: ( req, res, next ) => {
      const db = req.app.get('db');
      const { params, query } = req;
      console.log('Updated Quantity')
  
      db.update_quantity( params.id, query.desc )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    delete_from_cart: ( req, res, next ) => {
      const db = req.app.get('db');
      const { params } = req;
      console.log('Deleted One')
  
      db.delete_from_cart([ params.id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };