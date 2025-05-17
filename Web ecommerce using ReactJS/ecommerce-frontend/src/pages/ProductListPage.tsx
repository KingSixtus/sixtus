import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setFilteredProducts(data);
            const uniqueCategories = [...new Set(data.map(product => product.category))];
            setCategories(uniqueCategories);
        };
        loadProducts();
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
            <h1>Product Catalogue</h1>
            <ProductFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                sortOrder={sortOrder} 
                setSortOrder={setSortOrder} 
            />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default ProductListPage;