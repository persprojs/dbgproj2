import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/ProductList.css'; // Import the CSS file for styling

const ProductList = ({ selectedCategory, selectedSubcategory }) => {
  console.log(`[ProductList] Selected Category: ${selectedCategory}, Selected Subcategory: ${selectedSubcategory}`);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('[ProductList] Fetching products from API...');
        const response = await axios.get(`${API_BASE_URL}/api/products`);
        console.log('[ProductList] API Response:', response.data); // Log the API response
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('[ProductList] API response is not an array:', response.data);
          setError('Failed to fetch products. The API response is not an array.');
        }
      } catch (error) {
        console.error('[ProductList] Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const filteredProducts = Array.isArray(products)
    ? products.filter(product => {
        const matchesCategory = selectedCategory
          ? product.Category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
          : true;

        const matchesSubcategory = selectedSubcategory
          ? product.SubCategory.trim().toLowerCase() === selectedSubcategory.trim().toLowerCase()
          : true;

        // Log matching products for debugging
        console.log(`[ProductList] Product ${product.Title} matches category: ${matchesCategory}, matches subcategory: ${matchesSubcategory}`);
        return matchesCategory && matchesSubcategory;
      })
    : [];

  console.log('[ProductList] Filtered Products:', filteredProducts);

  const handleAddToCart = (product) => {
    console.log('[ProductList] Added to cart:', product);
    // Add your logic to handle adding the product to the cart
  };

  if (!selectedCategory && !selectedSubcategory) {
    return <div className="alert alert-info">Please select a category and subcategory to filter products.</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`} className="product-link">
              <div className="product-image">
                <img src={product.Images} alt={product.Title} />
              </div>
              <div className="product-details">
                <h3>{product.Title}</h3>
                <p className="price">${product.Price}</p>
                <div className="short-description">
                  {product.ShortDescription}
                </div>
              </div>
            </Link>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
