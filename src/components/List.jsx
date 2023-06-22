import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Card from './Card'

const List = ({catId, maxPrice, catChecked, sort }) => {

    const {Data, Loading, error} = useFetch(`/products?populate=*&[filters][sub-categories][id]=${catId}${catChecked.map(item=> `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);
    console.log(Data)
  return (
    <div>
      <div className='w-full  my-10 flex  flex-wrap'>
                {error?"something went wrong !!  :(":(Loading? "loading" : Data?.map((item)=>(
                  <div className='mr-4'>
                    <Card item={item?.attributes} id={item?.id} imgSource={item?.attributes.img1.data.attributes.url}/>
                  </div>
                )))}
              </div>
    </div>
  )
}

export default List
