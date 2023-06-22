import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="text-gray-800 text-4xl lg:text-6xl font-bold mb-8">Welcome to our Ecommerce Store</h1>
                        <p className="text-gray-600 text-lg mb-8">Discover a wide range of products for all your needs.</p>
                        <a href="/products" className="bg-blue-500 text-white font-bold py-2 px-6  transition-all hover:bg-blue-600">Shop Now</a>
                    </div>
                    <div className="lg:w-1/2 pl-40">
                        <img src="/shop.png" alt="shop Image" className="rounded-lg shadow-md"/>
                    </div>
                </div>
            </div>
       </section>
    </div>
  )
}

export default Banner