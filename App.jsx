import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import SidePanel from './components/SidePanel';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductManager from './Admin/ProductManager'; // Admin Component
import Navbar from './components/Navbar'; // Import Navbar Component
import './App.css'; // Ensure the path is correct

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategorySelect = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add Navbar here */}
        <Header />
        <Banner />
        <div className="d-flex">
          <SidePanel onCategorySelect={handleCategorySelect} />
          <div className="content flex-grow-1">
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    selectedCategory={selectedCategory}
                    selectedSubcategory={selectedSubcategory}
                  />
                }
              />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/admin" element={<ProductManager />} /> {/* Admin Route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
