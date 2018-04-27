update cart
set quantity = $2
where product_id = $1
returning product_id