import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../context/helper";
import { food_items } from "../data/food";

function Navbar() {
  let{input,setInput,SetCate,setShowCart}=useContext(DataContext)
  useEffect(()=>{if(input===""){
    SetCate(food_items)
  }else{
    let newArr=food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    SetCate(newArr)}
  },[input])

  return (


    <div className=" w-full h-25 flex justify-between items-center px-8">
      <div className="w-15 h-15 rounded-md bg-white flex justify-center items-center shadow-xl ">
        <MdFastfood className="w-7.5 h-7.5 text-green-500" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} action="" className="w-[45%] h-15 px-5 bg-white flex items-center rounded-[10px] shadow-md md:w-[70%]">
        <IoSearchSharp className="text-green-500 text-[20px]" /> 

       <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" className="mx-5 w-full outline-none text-[16px] md:text-[20px] " placeholder="Search Items..." />
      </form>
      <div className="w-15 h-15 cursor-pointer rounded-md bg-white flex justify-center items-center shadow-xl relative">
        <span className="absolute top-0 right-2 font-bold text-green-500">0</span>
      <FaShoppingCart onClick={()=>setShowCart(true)} className="w-7.5 h-7.5  text-green-500" />
      </div>
    </div>
  );
}

export default Navbar;
