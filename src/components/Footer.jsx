import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white py-4">
        <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">Categories</h3>
                    <ul className="text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-gray-800">Mens</a></li>
                    <li><a href="#" className="hover:text-gray-800">Womens</a></li>
                    <li><a href="#" className="hover:text-gray-800">Kids</a></li>
                    <li><a href="#" className="hover:text-gray-800">Shoes</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">Information</h3>
                    <ul className="text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-gray-800">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                    <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">Customer Support</h3>
                    <ul className="text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-gray-800">FAQs</a></li>
                    <li><a href="#" className="hover:text-gray-800">Shipping &amp; Returns</a></li>
                    <li><a href="#" className="hover:text-gray-800">Track Order</a></li>
                    <li><a href="#" className="hover:text-gray-800">Sitemap</a></li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-gray-800 font-semibold text-lg mb-2">Follow Us</h3>
                    <ul className="text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-gray-800">Facebook</a></li>
                    <li><a href="#" className="hover:text-gray-800">Twitter</a></li>
                    <li><a href="#" className="hover:text-gray-800">Instagram</a></li>
                    <li><a href="#" className="hover:text-gray-800">LinkedIn</a></li>
                    </ul>
                </div>
                </div>
                <hr className="my-4 border-gray-300"/>
                <div className='flex w-full justify-between'>
                    <p class="text-gray-500 text-xl text-center">&copy; 2023 STORE. All rights reserved.</p>
                    <h1>DEVELOPED BY YOUSSEF</h1>
                    <img src='/payment.webp' className="h-16" />
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer