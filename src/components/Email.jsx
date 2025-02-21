import React from "react";
import kop from "../assets/kop.png";

function Email() {
  return (
    <div className="flex justify-center items-center h-[470px] px-4 md:px-10">
      <div className="w-full max-w-4xl bg-gradient-to-t from-sky-900 to-indigo-500 rounded-[30px] flex flex-col md:flex-row items-center justify-between p-6 md:p-[70px]">
        <div className="text-center md:text-left">
          <p className="text-[50px] md:text-[70px] text-white font-black">GET 50%</p>
          <div className="w-full max-w-md bg-white rounded-[15px]  overflow-hidden mt-4 flex items-center">
            <input className="flex-1 h-[68px] outline-none text-[17px] px-4" type="text" placeholder="Enter Your Email Address" />
            <button className="h-[53px] w-[133px] bg-[#6C5FBC] text-white text-[18px] rounded-[12px]">Subscribe</button>
          </div>
        </div>
        <div className="flex justify-end mt-6 md:mt-0">
          <img className="h-[180px] md:h-[240px]" src={kop} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Email;
