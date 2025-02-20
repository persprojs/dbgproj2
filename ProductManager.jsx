import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

const ProductManager = () => {
  const [searchQuery, setSearchQuery] = useState({ title: '', category: '', subCategory: '' });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('[ProductManager] Fetching products with query:', searchQuery);
      const response = await axios.get(`${API_BASE_URL}/api/products`, {
        params: searchQuery,
      });
      console.log('[ProductManager] API Response:', response.data); // Log the API response
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('[ProductManager] API response is not an array:', response.data);
      }
    } catch (error) {
      console.error('[ProductManager] Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input change for search form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
    console.log('[ProductManager] Updated search query:', searchQuery);
  };

  // Handle input change for product fields
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
    console.log(`[ProductManager] Updated product at index ${index}:`, updatedProducts[index]);
  };

  // Update a single product
  const handleUpdate = async (id, updatedProduct) => {
    try {
      console.log(`[ProductManager] Updating product with ID ${id}:`, updatedProduct);
      const response = await axios.put(`${API_BASE_URL}/api/products/${id}`, updatedProduct);
      console.log('[ProductManager] Product updated:', response.data);
    } catch (error) {
      console.error('[ProductManager] Error updating product:', error);
    }
  };

  // Update all products
  const handleUpdateAll = async () => {
    try {
      console.log('[ProductManager] Updating all products:', products);
      const response = await axios.put(`${API_BASE_URL}/api/products`, products);
      console.log('[ProductManager] All products updated:', response.data);
    } catch (error) {
      console.error('[ProductManager] Error updating products:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Product Manager</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={searchQuery.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={searchQuery.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subCategory" className="form-label">SubCategory</label>
          <input
            type="text"
            className="form-control"
            id="subCategory"
            name="subCategory"
            value={searchQuery.subCategory}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {products.length > 0 && (
        <div className="mt-4">
          <h3>Search Results</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Short Description</th>
                <th>Price</th>
                <th>Images</th>
                <th>Variant1</th>
                <th>Variant2</th>
                <th>Variant3</th>
                <th>Category</th>
                <th>SubCategory</th>
                <th>Tags</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Title || ''}
                      onChange={(e) => handleProductChange(index, 'Title', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Description || ''}
                      onChange={(e) => handleProductChange(index, 'Description', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.ShortDescription || ''}
                      onChange={(e) => handleProductChange(index, 'ShortDescription', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={product.Price || ''}
                      onChange={(e) => handleProductChange(index, 'Price', parseFloat(e.target.value))}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Images || ''}
                      onChange={(e) => handleProductChange(index, 'Images', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Variant1 || ''}
                      onChange={(e) => handleProductChange(index, 'Variant1', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Variant2 || ''}
                      onChange={(e) => handleProductChange(index, 'Variant2', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Variant3 || ''}
                      onChange={(e) => handleProductChange(index, 'Variant3', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Category || ''}
                      onChange={(e) => handleProductChange(index, 'Category', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.SubCategory || ''}
                      onChange={(e) => handleProductChange(index, 'SubCategory', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={product.Tags || ''}
                      onChange={(e) => handleProductChange(index, 'Tags', e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleUpdate(product._id, product)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={handleUpdateAll}>
            Update All
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductManager;
