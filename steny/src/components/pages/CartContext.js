import React, { createContext, useState, useContext } from 'react';

// Create a context object
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to remove item from cart
    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    // Function to clear all items from cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
