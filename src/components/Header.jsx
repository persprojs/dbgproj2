//src/components/Header.jsx
import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../assets/Header.css'; // Import your custom styles

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand href="/">Dr. Reckeweg</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search products..."
            className="custom-search mr-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
