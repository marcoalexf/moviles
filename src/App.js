import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes, Router } from "react-router"
import { ProductPage } from './features/ProductPage/ProductPage'
import { BrowserRouter } from 'react-router-dom';
import { ProductDetailPage } from './features/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
