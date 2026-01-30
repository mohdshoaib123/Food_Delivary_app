import  {   useState } from 'react'
import { DataContext } from './helper'
import { food_items } from '../data/food';


function UserContext({children}) {
  
let [cate,SetCate]=useState(food_items);
  let[input,setInput]=useState("")
  let[showCart,setShowCart]=useState(false)
  let data={input:input,
    setInput:setInput,
    cate:cate,
    SetCate:SetCate,
    showCart:showCart,
    setShowCart:setShowCart


  }

  return (

    <div>
      <DataContext.Provider value={data} >
      {children}
      </DataContext.Provider>

      
    </div>
  )
}

export default UserContext
