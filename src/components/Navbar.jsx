import React, { useState } from 'react'
import Cart from './Cart';

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(!open)
    }
  return (
    <div>
        <nav className="bg-white py-5">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-dark text-4xl font-bold flex items-center">
              <img src="/logo192.png" alt="Logo" className="h-8 mr-2"/>
              STORE
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input type="text" placeholder="Search" className="bg-gray-100 text-dark rounded-md px-4 py-2  focus:bg-gray-200"/>
              <button className="absolute right-0 top-0 mt-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-gray-500">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              </button>
            </div>
            <ul className="ml-6 space-x-6 flex">
              <li>
                <a href="/" className="cursor-pointer text-dark hover:text-gray-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="/products/:id" className="cursor-pointer text-dark hover:text-gray-400 transition-colors duration-300">Shop</a>
              </li>
              <li>
                <div className='flex items-center'>
                    <a  href='#' className=" cursor-pointer text-dark hover:text-gray-400 transition-colors duration-300" onClick={handleOpen}>Cart</a>
                    <h1 className='ml-1  rounded-xl text-center'>: 0</h1>
                </div>
              </li>
              <li>
                <a  href="#" className="cursor-pointer text-dark hover:text-gray-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
     </nav>
     {open && <Cart/>}
     
    </div>
  )
}

export default Navbar