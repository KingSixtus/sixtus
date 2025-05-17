import React from 'react';

interface ProductFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    sortOption: string;
    onSortChange: (option: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
    sortOption,
    onSortChange,
}) => {
    return (
        <div className="product-filter">
            <div className="filter-category">
                <h3>Filter by Category</h3>
                <select
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-sort">
                <h3>Sort by Price</h3>
                <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default ProductFilter;