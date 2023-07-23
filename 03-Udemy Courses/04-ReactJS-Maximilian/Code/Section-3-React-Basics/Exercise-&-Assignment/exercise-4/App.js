import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
  const product = [
    {
      title: 'Product 1',
      price: 10,
      description: 'First product',
    },
    {
      title: 'Product 2',
      price: 20,
      description: 'Second product',
    },
  ];
  return (
    <div>
      <h1>My Demo Shop</h1>
      <Product
        title={product[0].title}
        price={product[0].price}
        description={product[0].description}
      ></Product>

      <Product
        title={product[1].title}
        price={product[1].price}
        description={product[1].description}
      ></Product>
    </div>
  );
}
