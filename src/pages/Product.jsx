import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductB from '../components/ProductB';
import { AuthContextProvider } from "../hooks/cartRed/cartContext";

const Product = () => {
  return (
    <div>
      <AuthContextProvider>
          <Navbar/>
            <ProductB />
          <Footer/>
      </AuthContextProvider>
    </div>
  )
}

export default Product