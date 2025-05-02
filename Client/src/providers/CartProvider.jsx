import React, { useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const cartInfo = {
        cart, setCart
    }
    return (
        <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
    );
};

export default CartProvider;