import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../api/products';
import { addToCart } from '../redux/cartSlice';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selectedProduct);

    useEffect(() => {
        const loadProduct = async () => {
            await fetchProductById(id);
        };
        loadProduct();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            {product ? (
                <ProductDetail product={product} onAddToCart={handleAddToCart} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetailPage;