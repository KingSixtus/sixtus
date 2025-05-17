import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
import { useEffect, useState } from 'react';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<any>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            const fetchedProduct = await fetchProductById(id);
            setProduct(fetchedProduct);
        };
        getProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 }));
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;