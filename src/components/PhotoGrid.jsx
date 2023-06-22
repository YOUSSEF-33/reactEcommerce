import React from 'react'

const PhotoGrid = () => {
  return (
    <div className='my-[80px]'>
        <section class="py-18 ">
          <div class="container mx-auto">
            <h2 class="text-3xl text-center font-bold mb-8">CATEGORIES</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
              <div class="relative bg-gray-200 h-[400px] flex items-center justify-center">
                <img src="/men.jpeg" alt="Image 1" class=" w-full h-[400px] overflow-hidden object-cover"/>
                <h1 className='absolute z-111111 bg-blue-400 py-3 px-6 cursor-pointer hover:bg-blue-500'>Men</h1>
              </div>
              <div class=" relative bg-gray-200  overflow-hidden flex items-center justify-center">
                <img src="/women.jpeg" alt="Image 2" class=" w-full h-[400px] overflow-hidden object-cover"/>
                <h1 className='absolute z-111111 bg-blue-400 py-3 px-6 cursor-pointer hover:bg-blue-500'>Women</h1>
              </div>
              <div class="relative bg-gray-200  overflow-hidden flex items-center justify-center">
                <img src="/kids.jpeg" alt="Image 3" class=" w-full h-[400px] overflow-hidden object-cover"/>
                <h1 className='absolute z-111111 bg-blue-400 py-3 px-6 cursor-pointer hover:bg-blue-500'>Kids</h1>
              </div>
              <div class="relative bg-gray-200  overflow-hidden flex items-center justify-center">
                <img src="/shoes.jpeg" alt="Image 4" class=" w-full h-[400px] overflow-hidden object-cover"/>
                <h1 className='absolute z-111111 bg-blue-400 py-3 px-6 cursor-pointer hover:bg-blue-500'>Shoes</h1>
              </div>
              <div class="relative bg-gray-200  overflow-hidden flex items-center justify-center">
                <img src="/accessories.jpeg" alt="Image 5" class=" w-full h-[400px] overflow-hidden object-cover"/>
                <h1 className='absolute z-111111 bg-blue-400 py-3 px-6 cursor-pointer hover:bg-blue-500'>Acsessores</h1>
              </div>
              <div class="relative bg-gray-200  overflow-hidden flex items-center justify-center">
                <img src="/tech.jpeg" alt="Image 6" class="w-full h-[400px] overflow-hidden object-cover"/>
                <h1 className='absolute z-111111 bg-blue-400 py-3 px-6 cursor-pointer hover:bg-blue-500'>Technology</h1>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default PhotoGrid