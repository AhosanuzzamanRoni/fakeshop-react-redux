

import React from 'react';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProductDetails from './Components/ProductDetails';

const App = () => {
  return (
    <div>
       
      <BrowserRouter>
      <Header/>
   
      <Routes>
      <Route path="/" element={<ProductListing />}/>
      <Route path="/product/:productId" element={<ProductDetails/>}/>
      <Route>  404 Not Found!...</Route>

      </Routes>
     
      </BrowserRouter>
   
     
      
    </div>
  );
};

export default App;
