import Card  from '../components/Card'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
//import Featured from '../components/Featured';
import ContactBanner from '../components/ContactBanner';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import List from '../components/List';



const Products = () => {
  const [maxValue, setMaxValue] = useState(2000)
  const [catChecked, setCatChecked] = useState([])
  const [sort, setSort] = useState('desc')
  const catId = parseInt(useParams().id)
  const {Data, Loading, error} = useFetch(`/sub-categories?[filters][sub-categories][id][$eq]=${catId}`);
  console.log(Data);
  const handleCheck = (e)=>{
      const value = e.target.value;
      const isChecked = e.target.checked;
      setCatChecked(
        isChecked? [...catChecked, value] 
        : catChecked.filter(item => item !== value)
      )
  }
  const handleSort = (e)=>{
    const sortVal = e.target.value;
    setSort(sortVal)
  }
  
  return (
    <div>
        <Navbar/>
          <div className='w-[100vw] flex '>
            <div className='h-[100vh] w-[20%] py-20 px-8'>
            <h1 className='mb-5 text-3xl font-bold'>Filter  </h1>
            <hr />
                <div className=' my-10 '>
                  <h1 className='text-2xl font-bold mb-2'>Product Category</h1> 
              {Data?.map((item)=>(
                  <div className='flex'>
                    <input type="checkbox" value={item?.id} id={item?.id} onChange={handleCheck}/><label className='ml-2 text-lg' htmlFor={item?.id}>{item?.attributes?.title}</label>
                  </div>
              ))}
                </div>
                <div className=''>
                  <h1 className='text-2xl font-bold mb-2'>PRICE RANGE</h1>
                  <div className='flex items-center mb-8'>
                    <span className='mr-2'>$1</span> <input type="range" min="1" max="2000" value={maxValue} onChange={e=>setMaxValue(e.target.value)} /><span className='ml-2'>${maxValue}</span>
                  </div>
                </div>
                <div className=''>
                  <h1 className='text-2xl font-bold mb-2'>SORT BY</h1>
                  <div className='flex'>
                    <input id='desc' value="desc" name='price' type="radio" onChange={(e)=>setSort("desc")} /><label htmlFor='acs' className='ml-2 text-lg'>Highest</label>
                  </div>
                  <div className='flex'>
                    <input id='asc' value="asc" name='price' type="radio" onChange={(e)=>setSort("asc")}/><label htmlFor='desc' className='ml-2 text-lg'>Lowest</label>
                  </div>
                </div>
            </div>
            
            <div className=' w-[80%]   '>
              <div className='w-[98%] mt-8'>
                <img src="/men.jpeg" alt=""  className='w-[100%] h-[250px] object-cover '/>
              </div>
              <div>
              <List catId={catId} sort={sort} maxPrice={maxValue} catChecked={catChecked}  />
              </div>
            </div>
          </div>
          <ContactBanner/>
        <Footer/>
    </div>
  )
}

export default Products