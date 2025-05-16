import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };
        
        const fetchCategories = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setCategories(response.data);
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const filteredProducts = [...products]
        .filter(product => 
            !selectedCategory || product.category === selectedCategory
        )
        .sort((a, b) =>
            sortOrder === 'asc' ? a.price - b.price :
            sortOrder === 'desc' ? b.price - a.price : 0
        );

    return (
        <div className="product-list">
            <div className="filters">
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                
                <select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="">Default</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            <div className="products">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <Link to={'/product/${product.id}'}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>GH¢{product.price}</p>
                            <p className="category">{product.category}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;