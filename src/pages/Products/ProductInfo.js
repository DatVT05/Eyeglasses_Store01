import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductInfo.scss';

const ProductInfo = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      console.error('Product ID is undefined');
      return;
    }
  
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${productId}`);
        const response = await fetch(
          `http://localhost:3000/product/getProduct?id=${productId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-info">
      <h1>{product?.name}</h1>
      <p>Price: {product?.price} ₫</p>
      <p>Brand: {product?.brand}</p>
      <p>Material: {product?.material}</p>
      <img src={product?.image} alt={product?.name} />
      <p>Colors:</p>
      <ul>
        {product?.colors?.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
