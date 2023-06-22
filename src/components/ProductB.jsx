import React, { useContext, useReducer, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFetch } from '../hooks/useFetch';
import { useParams } from "react-router-dom";
import { cartReducer } from '../hooks/cartRed/cartReducer';
import { AuthContext } from '../hooks/cartRed/cartContext';


const Images = [
    "/logo192.png",
    "/shop.png"
]

const ProductB = () => {
   // const [result, dispatch] = useReducer(cartReducer, []);
   const {dispatch} = useContext(AuthContext);
   //console.log(dispatch({}))
   const handleClick = (e)=>{
    e.preventDefault();
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
         id:Data?.id,
         title:Data?.attributes.title,
         price:Data?.attributes.price,
         img: Data?.attributes.img1.data.attributes.url,
      },
  })
   }
  
    const URL ="http://localhost:1337"
    const id = useParams().id
    const [item, setItem] = useState("img1");
    const [count, setCount] = useState(1);
    const handlAdd = ()=>{
        setCount(count + 1);
    }
    const handlDecrease = ()=>{
        count > 1 ? setCount(count-1) : setCount(1)
    }

    const {Data, Loading, error} = useFetch(`/products/${id}?populate=*`)
    //console.log(Data?.attributes.img1.data.attributes.url)

  return error?"Something went wrong!! :(":(Loading?"Loading..." : (
    <div className='w-[100%] h-[100vh] flex'>
        <div className='w-[50%]  h-[100vh] flex'>
           <div className='width-[30%] pl-2 h-[100vh] pr-4  border-r border-dark-900  border-5 '>
              <img src={URL+Data?.attributes.img1.data.attributes.url} alt=""  className='w-40 my-8 ' onClick={e => setItem("img1")}/>
              <img src={URL+Data?.attributes.img2.data.attributes.url} alt="" className='w-40  my-8 'onClick={e => setItem("img2")} />
           </div>
           <div className='w-[100%] flex justify-center '>
              <img src={URL +Data?.attributes?.[item].data.attributes.url} alt="" className='w-[90%] object-cover max-h-[900px] m-4'/>
           </div>
        </div >
        <div className='w-[50%] ml-4 mt-12 '>
          <div>
            <h1 className='text-4xl font-bold'>{Data?.attributes.title}</h1>
            <h1 className='text-4xl mt-4 text-blue-400 font-bold'>${Data?.attributes.price}</h1>
            <h1 className='text-2xl mt-12'>{Data?.attributes.desc}</h1>
          </div>
           <div className='my-6  flex'>
             <div className='p-4 bg-gray-200 cursor-pointer' onClick={handlDecrease}>-</div>
             <div className='p-4 mx-2'>{count}</div>
             <div className='p-4 bg-gray-200 cursor-pointer' onClick={handlAdd}>+</div>
           </div>
           <div className='flex my-6'>
                <div className='felx bg-blue-400 p-4 cursor-pointe'>
                    <AddShoppingCartIcon className='mr-2'/>
                    <button type='supmit' onClick={handleClick}>ADD TO CART</button>
                    { /* console.log(result) */}
                   
                </div>
                <div className='felx bg-red-200 p-4 mx-4 cursor-pointe'>
                    <FavoriteBorderIcon className='mr-2'/>
                    <button type='supmit'>ADD TO WISHLIST</button>
                </div>
                <div className='felx bg-gray-300 p-4 mr-4 cursor-pointe'>
                    <BalanceIcon className='mr-2'/>
                    <button type='supmit'>ADD TO COMPARE</button>
                </div>
           </div>
           <div>
            <h1 className='text-2xl my-6 mt-20'>tag, mens, shoes, mens shoes</h1>
            <hr />
            <h1>Addtional Information</h1>
            <hr />
            <h1>Description</h1>
            <hr />
            <h1>FAQs</h1>
           </div>
        </div>
    </div>
  ))
}

export default ProductB