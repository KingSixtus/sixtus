# E-commerce Frontend

This is a simple e-commerce frontend application built with React and TypeScript. It features a product listing page, product detail view, and a shopping cart system using Redux for state management.

## Features

- **Product Catalogue Page**: Displays a list of products with images, titles, prices, and categories. Users can filter products by category and sort them by price.
- **Product Detail Page**: Users can click on a product to view detailed information, including a description, image, and price. An "Add to Cart" button is available.
- **Shopping Cart**: Users can view their cart contents on a dedicated page, adjust quantities, and remove items. The total price is calculated automatically.
- **State Persistence**: The cart state is persisted to localStorage, ensuring that cart items remain available even after refreshing the page.
- **Routing**: The application uses React Router for navigation between the product list, product details, and the shopping cart.

## Technologies Used

- React
- TypeScript
- Redux for state management
- React Router for navigation
- Axios for API requests

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ecommerce-frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## API

This application uses a mock API to fetch product data. The API endpoint used is [https://fakestoreapi.com](https://fakestoreapi.com).

## Folder Structure

```
ecommerce-frontend
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── products.ts
│   ├── components
│   │   ├── Cart.tsx
│   │   ├── CartItem.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── ProductFilter.tsx
│   │   └── ProductList.tsx
│   ├── pages
│   │   ├── CartPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── ProductListPage.tsx
│   ├── redux
│   │   ├── cartSlice.ts
│   │   └── store.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is open-source and available under the [MIT License](LICENSE).