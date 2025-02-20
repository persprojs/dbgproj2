const express = require('express');
const multer = require('multer');
const router = express.Router();
const Product = require('../models/Product');
const config = require('../config'); // Import config

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(`Uploading file to 'uploads/' directory.`);
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log(`Saving file with original name: ${file.originalname}`);
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Product routes

// GET all products
router.get('/products', async (req, res) => {
  try {
    console.log('Fetching all products from the database...');
    const products = await Product.find();
    res.json(products);
    console.log('Products fetched successfully.');
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// GET product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(`Fetching product with ID: ${productId}`);
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
      console.log('Product fetched successfully.');
    } else {
      res.status(404).json({ message: 'Product not found' });
      console.log('Product not found.');
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// POST create new product
router.post('/products', async (req, res) => {
  try {
    console.log('Creating new product with data:', req.body);
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
    console.log('Product created successfully.');
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
});

// PUT update product by ID
router.put('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(`Updating product with ID: ${productId}`);
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (updatedProduct) {
      res.json(updatedProduct);
      console.log('Product updated successfully.');
    } else {
      res.status(404).json({ message: 'Product not found' });
      console.log('Product not found.');
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product' });
  }
});

// DELETE product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(`Deleting product with ID: ${productId}`);
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.json({ message: 'Product deleted successfully' });
      console.log('Product deleted successfully.');
    } else {
      res.status(404).json({ message: 'Product not found' });
      console.log('Product not found.');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product' });
  }
});

// File upload route
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    console.log('File upload request received.');
    console.log('Uploaded file:', req.file);
    res.status(200).send('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Error uploading file' });
  }
});

module.exports = router;
