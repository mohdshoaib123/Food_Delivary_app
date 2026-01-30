import React from 'react'

import { LuLeafyGreen } from "react-icons/lu";
import { GiRoastChicken } from "react-icons/gi";

function Card({food_name,food_type,food_image,price}) {
  return (
    <div className='w-60 bg-white h-90 p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400 '>
      <div className='w-full h-[60%] rounded-lg overflow-hidden'><img src={food_image} className='object-cover' alt="" /></div>
      <div className='text-2xl font-semibold'>{food_name}</div>
      <div className=' w-full flex justify-between items-center'>
        <div className='text-green-500 font-bold'>{price}/-</div>
        <div className='flex justify-center items-center text-lg font-bold  gap-3 text-green-500 '>  {food_type==="veg"?<LuLeafyGreen />:<GiRoastChicken />} <span>{food_type}</span>  </div>
      </div>
      <div><button className='w-full bg-green-300 p-3 rounded-lg text-gray-700 hover:bg-green-400 transition-all ' disabled="disabled">
        Add to dish</button></div>
      
    </div>
  )
}

export default Card
