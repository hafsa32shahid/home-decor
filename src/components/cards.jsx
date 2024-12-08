import React, { useEffect, useState } from 'react';
import "./Products.css"
import cards2 from "./pro.json"

const Product2 = () => {
    

  return (
    <div className="product-list">
      {
       cards2 && cards2.map ( product=>
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className='product-image' />
            <h2>{product.name}</h2>
            <p className='producy-info'>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        )
        }
      
    </div>
  );
};

export default Product2;