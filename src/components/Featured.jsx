import Card  from './Card'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {URL, TOKEN} from '../auth'
import { useFetch } from '../hooks/useFetch';



const Featured = () => {
 /*  const URL = "http://localhost:1337/api";
  const TOKEN  = "c422d8c67aa4b6bb0717f9e1dfd731d148326402f02dfa057f48baf20394a13a72e12ca3f2445c315234d99466cca9590b8d8f0abbd418ff44a34736d5a5e3006dd80e742f3d2f81321adda3b17fa4ef1aaf089bba5fb099469cce83dfc0b08f919afb615f1fb2c87b0a1ca73ea8905a3d4b2ed47c85bb65eab87e2d0073b18e" */
  const [product,setProdut] = useState([]);

  const {Data, Loading, error} = useFetch("/products?populate=*&[filters][type][$eq]=featured")

 

  return (
    <div>
        <section class="py-12 h-full">
           <h2 class="text-3xl text-center font-bold mb-8">Featured Products</h2>
            <div class="container mx-auto flex justify-between items-center">
              {error? "something went wrong..!":(Loading ? "is loading...": Data?.map((item)=>(
                <Card key={item.id} id={item?.id} item={item?.attributes} imgSource={item?.attributes.img1.data.attributes.url}/>
              )))}
            </div>
        </section>


    </div>
  )
}

export default Featured;