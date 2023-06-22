import Card  from './Card'
import React, { useEffect, useState } from 'react';
import {URL, TOKEN} from '../auth';
import axios from 'axios'
import { useFetch } from '../hooks/useFetch';

const featuredProduct = [
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
    image:'/men.jpeg',
    isNew:false,
    number:1
  },
  {
    id: 3,
    title:"second t-shirt",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:20.95,
    image:'/men.jpeg',
    isNew:false,
    number:1
  },
  {
    id: 4,
    title:"second t-shirt",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    price:20.95,
    image:'/men.jpeg',
    isNew:false,
    number:1
  }
]

const Latest = () => {
  const {Data, Loading, error} = useFetch("/products?populate=*&[filters][type][$eq]=trending")

 
  return (
    <div className='my-20'>
        <section class="py-12 h-full">
           <h2 class="text-3xl text-center font-bold mb-8">Trending Products</h2>
            <div class="container mx-auto flex justify-between items-center">
              {error? "something went wrong..! ):":(Loading ? "is loading...": Data?.map((item)=>(
                <Card key={item.id} id={item?.id} item={item?.attributes} imgSource={item?.attributes.img1.data.attributes.url}/>
              )))}
            </div>
        </section>


    </div>
  )
}

export default Latest;