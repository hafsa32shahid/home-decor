// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css'; // Import CSS module

const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    image: 'sofa.jpg',
    price: '799.99',
    description:
      'This modern sofa is crafted with comfort in mind and is perfect for contemporary living rooms. Upholstered in premium fabric with a stylish design.',
  },
  {
    id: 2,
    name: 'Elegant Lamp',
    image: 'lamp.jpg',
    price: '149.99',
    description:
      'An elegant and minimalist lamp that enhances any room’s aesthetic while providing ample lighting.',
  },
  // Add more products
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
