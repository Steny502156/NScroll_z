import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div>{item.title}</div>
                                <div>{item.price}</div>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
