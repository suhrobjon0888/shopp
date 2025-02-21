// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import grups from "../assets/grups.png";
import phonee from "../assets/phonee.png";
import Animashion from "..//components/Animashion";

function Contend() {
  return (
    <div className="flex flex-col items-center px-4 md:px-10 lg:px-20">
      <div className="w-full my-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="relative h-auto w-full max-w-md bg-[#6C5FBC] rounded-lg p-6 flex flex-col items-center">
          <a href="/">
            <img src={grups} alt="" className="w-full max-w-xs" />
          </a>
          <img src={phonee} alt="" className="absolute bottom-[-40px] right-[-20px] w-32 md:w-40 lg:w-48" />
        </div>
        <div className="w-full max-w-lg text-center lg:text-left">
          <p className="text-[32px] md:text-[40px] text-[#252525] font-[600]">
            Customer <span className="text-[#6C5FBC]">Support</span>
            <Animashion/>
          </p>
          <div className="mt-6 space-y-4">
            <Box sx={{ width: '100%' }}>
              <TextField fullWidth label="Full name" id="fullWidth" />
            </Box>
            <Box sx={{ width: '100%' }}>
              <TextField fullWidth label="Enter your email " id="fullWidth" />
            </Box>
            <div>
              <textarea
                className="h-40 w-full p-4 border border-gray-400 rounded-md resize-none"
                name="Enter"
                id="Enter"
                placeholder="Enter The Problem Or Query "
              ></textarea>
            </div>
            <div>
              <button className="h-14 w-full rounded-md bg-[#6C5FBC] text-[20px] text-[#F9F9F9] font-medium font-[poppins]">
                Send now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contend;