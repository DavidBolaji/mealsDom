import React from 'react';

const CartContext = React.createContext({
    item: [],
    totalAmount: Math.abs(0),
    addItem: () => {},
    removeItem: (id) => {}
})

export default CartContext;