import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { CartItemType } from '../types';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const totalPrice = cartItems.reduce((total: number, item: CartItemType) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item: { id: number; title: any; image: any; price: any; quantity: any; }) => (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} />
                            <p>Price: ${item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e: { target: { value: any; }; }) => handleQuantityChange(item.id, Number(e.target.value))}
                                min="1"
                            />
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;