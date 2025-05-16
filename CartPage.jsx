import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    ).toFixed(2);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
            ) : (
                <>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="item-info">
                                <h3>{item.title}</h3>
                                <p>GH¢{item.price}</p>
                                <div className="quantity-controls">
                                    <button
                                    onClick={() => dispatch(updateQuantity({
                                        id: item.id,
                                        quantity: Math.max(1, item.quantity - 1)
                                    }))}
                                    >
                                        -    
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                    onClick={() => dispatch(updateQuantity({
                                        id: item.id,
                                        quantity: item.quantity + 1
                                    }))}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="remove"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2>Total: GH¢{total}</h2>
                    <button className="checkout">Proceed to checkout</button>
                </div>
                </>
            )}
        </div>
    );
};

export default CartPage;