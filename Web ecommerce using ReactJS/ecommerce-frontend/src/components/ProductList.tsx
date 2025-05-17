import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setFilteredProducts(data);
            const uniqueCategories = [...new Set(data.map(product => product.category))];
            setCategories(uniqueCategories);
        };
        getProducts();
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];

        if (selectedCategory) {
            updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
        }

        if (sortOrder === 'asc') {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else {
            updatedProducts.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(updatedProducts);
    }, [selectedCategory, sortOrder, products]);

    return (
        <div>
            <ProductFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                sortOrder={sortOrder} 
                setSortOrder={setSortOrder} 
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;