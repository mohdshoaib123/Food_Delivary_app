import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";

function Card2() {
  return (
    <div className=" flex  items-center relative w-full h-30 bg-white shadow-lg">
      <div className=" flex gap-3 w-[60%] h-full ">
        <div className="w-[60%] h-full overflow-hidden rounded-lg shadow-lg">
          <img src={image1} alt="" />
        </div>
        <div className=" w-[30%] flex flex-col gap-4 justify-center items-center">
          <div>pancake</div>
          <div
            className="bg-white w-[90%] border-2 border-green-400 text-green-400 rounded-lg h-[28%] flex overflow-hidden
          justify-between items-center "
          >
            <button className="text-[23px] w-[30%] flex justify-center items-center  font-semibold hover:bg-gray-400">
              -
            </button>
            <span className="w-[40%] bg-slate-200 h-full flex justify-center items-center">
              1
            </span>
            <button className=" flex justify-center items-center text-[18px] w-[30%]  h-full hover:bg-gray-400 font-semibold">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-2 flex flex-col gap-5">
        <span className="text-green-400 font-semibold">Rs 499/-</span>
        <RiDeleteBin6Line className="text-red-400" />

      </div>
    </div>
  );
}

export default Card2;
