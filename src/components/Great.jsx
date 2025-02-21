import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Mobil from "../assets/Mobile.png";
import { HiArrowSmallRight } from "react-icons/hi2";

function Great() {
  return (
    <>
      <div className="h-[225px] w-full bg-gradient-to-t from-sky-900 to-indigo-500 flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-32 text-center">
          <div>
            <p className="text-[43px] font-[poppins] text-[#fff] font-bold">
              10K+
            </p>
            <p className="text-[18px] text-[#C5BFED] w-full md:w-[260px]">
              Satisfied Customers All Over The World
            </p>
          </div>
          <div className="hidden md:block h-[130px] w-[1px] bg-[#C5C5C5]"></div>
          <div>
            <p className="text-[43px] font-[poppins] text-[#fff] font-bold">
              4M
            </p>
            <p className="text-[18px] text-[#C5BFED] w-full md:w-[260px]">
              Healthy Dishes Sold Including Milkshakes & Smoothies
            </p>
          </div>
          <div className="hidden md:block h-[130px] w-[1px] bg-[#C5C5C5]"></div>
          <div>
            <p className="text-[43px] font-[poppins] text-[#fff] font-bold">
              99.99%
            </p>
            <p className="text-[18px] text-[#C5BFED] w-full md:w-[260px]">
              Reliable Customer Support Providing Great Experiences
            </p>
          </div>
        </div>
      </div>

      <section className="min-h-[100vh] flex flex-col md:flex-row justify-center items-center px-4 gap-10 md:gap-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <a href="/">
            <img src={Mobil} alt="Mobile App" className="w-3/4 md:w-full" />
          </a>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[42px] md:text-[52px] font-[poppins] font-extrabold leading-tight">
            Premium <span className="text-[#6C5FBC]">Quality</span> For Your
            Health
          </p>
          <p className="text-[18px] md:text-[20px] text-[#676767] mt-3">
            Premium quality food is made with ingredients that are packed with
            essential vitamins and minerals.
          </p>
          <p className="text-[18px] md:text-[20px] text-[#676767] mt-3">
            These foods promote overall wellness by supporting healthy digestion
            and boosting immunity.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Box sx={{ "& button": { m: 1 } }}>
              <Button
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.ubercab.eats&hl=en",
                    "_blank"
                  )
                }
                sx={{
                  height: "63px",
                  width: "186px",
                  background: "#6C5FBC",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                variant="contained"
                size="large"
              >
                Download <HiArrowSmallRight className="text-[23px]" />
              </Button>
            </Box>
          </div>
        </div>
      </section>
    </>
  );
}

export default Great;
