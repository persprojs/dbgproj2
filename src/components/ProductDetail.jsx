import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  console.log('Product ID: (Product Detail)', id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `${API_BASE_URL}/api/products/${id}`;
        console.log('Request URL:', url); // Debug log
        const response = await axios.get(url);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  // Function to handle "Add to Cart" button click
  const handleAddToCart = (variant) => {
    alert(`Added to cart: ${variant}`); // Replace this with your cart logic
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.Title}</h2>
      <img src={product.Images} alt={product.Title} className="img-fluid" />
      <p>{product.Description}</p>
      <h3>Variants</h3>
      <ul className="list-unstyled">
        {product.Variant1 && (
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span>{product.Variant1}</span>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product.Variant1)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        )}
        {product.Variant2 && (
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span>{product.Variant2}</span>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product.Variant2)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        )}
        {product.Variant3 && (
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span>{product.Variant3}</span>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product.Variant3)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        )}
      </ul>
      <p><strong>Category:</strong> {product.Category}</p>
      <p><strong>Subcategory:</strong> {product.SubCategory}</p>
    </div>
  );
};

export default ProductDetail;