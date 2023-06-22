import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from '@mui/material';

const Card = ({item, id ,imgSource}) => {
  return (
    <div className='w-80 mx-4 my-4'>
      <a href={`/product/${id}`} >
        <div class="max-w-md bg-white  shadow-lg">
            <img class="w-full h-[350px] overflow-hidden object-cover"  src={ "http://localhost:1337"+imgSource} alt="Card Image"/>
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">{item?.title}</h3>
                <p class="text-gray-700">{item.desc}</p>
                <div className='flex w-full justify-between items-center'>
                    <h1 class="cursor-pointer mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ">Add to Cart</h1>
                    <div className='flex items-center'>
                        <h1 className='mr-2 text-gray-400 line-through'>${item.oldPrice || item.price + 20}</h1>
                        <h1>${item.price}</h1>
                    </div>
                </div>
            </div>
      </div>
      </a>
    </div>
  )
}

export default Card