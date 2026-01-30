
import Navbar from '../components/Navbar'
import category from "../data/Category"
import Card from '../components/Card'
import { food_items } from '../data/food'
import { useContext } from 'react'
import { DataContext } from '../context/helper'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../components/Card2'


function Home() {
  let{cate,SetCate,input,showCart,setShowCart}=useContext(DataContext)
  


let filterCate=(category)=>{

  if(category==="All"){
    SetCate(food_items)
  }
  else{
  let newCate=food_items.filter((items)=>{
    return items.food_category===category
  })
  SetCate(newCate)
}

}

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
    
      <Navbar></Navbar>
      {!input?  <div className='flex flex-wrap justify-center items-center gap-5 w-full'>{category.map((cate)=>  
        <div  key={cate.id} className='bg-white w-35 h-37.5 flex flex-col gap-5 text-[20px] font-semibold rounded-lg p-5 shadow-xl text-gray-600 hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filterCate(cate.name)}>
        {cate.icon}
        {cate.name}
        </div>
      )}</div>:null}
     
      <div className='flex flex-wrap justify-center gap-8 p-5'>
  {cate.map((item)=>
 <Card key={item.id} food_name={item.food_name} food_type={item.food_type} food_image={item.food_image} price={item.price}></Card> )}
</div>
    <div className={`w-full md:w-[40vw] h-full ] p-6 fixed top-0 right-0 bg-white shadow-xl cursor-pointer transition-all ${showCart? "translate-x-0":"translate-x-full"}  duration-500`}>
      <header className='flex  font-semibold  justify-between'>
        <span className='text-[18px] text-green-400'>order items</span>
        <RxCross1 className='text-[20px] text-green-400' onClick={()=>setShowCart(false)} />
        </header>
        <Card2></Card2>
        </div>
    </div> 
    
  )
}

export default Home
