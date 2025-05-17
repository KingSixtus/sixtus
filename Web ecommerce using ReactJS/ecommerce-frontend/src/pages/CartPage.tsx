import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';

const CartPage: React.FC = () => {
    const cartItems = useSelector((state: any) => state.cart.items);

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Cart />
            )}
        </div>
    );
};

export default CartPage;