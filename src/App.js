import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import { AuthContextProvider } from "./hooks/cartRed/cartContext";

function App() {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" element={<Products/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
