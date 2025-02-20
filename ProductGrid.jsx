import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../assets/ProductGrid.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="product-grid-container">
      <Row className="g-3">
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="product-col">
            <Card className="product-card">
              <Card.Img variant="top" src={product.Images} className="product-img" />
              <Card.Body>
                <Card.Title className="product-title">{product.Title}</Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;