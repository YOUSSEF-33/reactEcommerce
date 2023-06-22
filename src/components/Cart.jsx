import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext, AuthContextProvider } from "../hooks/cartRed/cartContext";
 const products = [
  {
    id: 1,
    title:"first t-shirt",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing. ",
    price:20.95,
    image:'/shop.png',
    isNew:true,
    number:2
  },
  {
    id: 2,
    title:"second t-shirt",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:20.95,
    image:'https://images.unsplash.com/photo-1634877',
    isNew:false,
    number:1
  }
]

const Cart = () => {
  const {state} = useContext(AuthContext)
  console.log(state.currentProduct)
  let Subtotal = 0;
  products.map((item)=>{
      Subtotal += item.price * item.number;
  })

  return (
    
    <div className='fixed top-20 z-999999999 right-0 bg-gray-100 transition-all duration-1000 ease p-5 shadow-xl '>
       <div className='mb-6 text-2xl font-bold text-gray-500'>
          <h1>Products in your cart</h1>
       </div>
       {products.map((item)=>(
          <div className='flex justify-between items-center '>
              <div className='w-20 '>
                <img src={item.image} alt="" />
              </div>
              <div className='w-60 ml-6'>
                  <h1 className='text-2xl'>{item.title}t</h1>
                  <h4 className='mt-2'>{item.desc}</h4>
                  <h1 className='text-blue-500 text-xl mt-2'>{item.number} x ${item.price}</h1>
              </div>
              <div>
                  <DeleteIcon className='text-red-400 ml-2'/>
              </div>
          </div>
       ))}
       <div className='mt-4 '>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold'>SUPTOTAL</div>
          <div className='text-2xl'>${Subtotal.toFixed(1)}</div>
        </div>
        <div className='my-4'>
          <button className='py-4 px-6 bg-blue-400'>PROCEED TO CHECKOUT</button>
          <h1 className='my-4 text-red-400 text-xl'>reset</h1>
        </div>
       </div>
    </div>
    
  )
}

export default Cart