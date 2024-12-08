// ProductList.js
import React from 'react';
import ProductCard from './Project-sec';
import img1 from '../assets/images/products-img/1.jpg'
import img2 from '../assets/images/products-img/2.jpg'
import img3 from '../assets/images/products-img/3.jpg'
import img4 from '../assets/images/products-img/4.jpg'
import img5 from '../assets/images/products-img/5.jpg'
import img6 from '../assets/images/products-img/6.jpg'
import img7 from '../assets/images/products-img/6.jpg'
import img8 from '../assets/images/products-img/8.jpg'
const products = [
  {
    id: 1,
    name: 'Modern Bed',
    image: img1,
    price: '799.99'
  },
  {
    id: 2,
    name: 'Elegant Style Kitchen',
    image: img2,
    price: '149.99'
  },
  {
    id: 3,
    name: 'Modern Sofa',
    image: img3,
    price: '799.99'
  },
  {
    id: 4,
    name: 'Elegant Lamp',
    image: img4,
    price: '149.99'
  },
  {
    id: 5,
    name: 'Modern Sofa',
    image: img5,
    price: '799.99'
  },
  {
    id: 6,
    name: 'Elegant Lamp',
    image: img6,
    price: '149.99'
  },
  {
    id: 7,
    name: 'Modern Sofa',
    image: img7,
    price: '799.99'
  },
  {
    id: 8,
    name: 'Elegant Lamp',
    image: img8,
    price: '149.99'
  },
 
  // Add more products as needed
];

const ProductList = () => {
  return (
    <section className="product-section">
        <div className="auto-container">
           <div class="sec-title">
                <span class="float-text">ProDuct</span>
                <h2>Builday Products</h2>
            </div>
        </div>
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </section>
  );
};

export default ProductList;
