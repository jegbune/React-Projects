import React from 'react'

function OrderList() {
  const order = {
    id: 1,
    username: 'John Doe',
    item: 'Pizza Margherita',
    price: '$30.00'
  };

  return <Order {...order} />
    
}

export default OrderList
