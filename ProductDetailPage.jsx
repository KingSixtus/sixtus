import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import axios from 'axios';


const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get('https://fakestoreapi.com/products/${id}');
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h1>{product.title}</h1>
                <p className="price">GH¢{product.price}</p>
                <p className="description">{product.description}</p>
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="add-to-cart"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


export default ProductDetailPage;