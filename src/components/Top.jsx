// import React from "react";
import Mask from "../assets/Mask.png";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import Image from "../assets/Image.png";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Food from "../assets/food.png";
import lop from '../assets/lop.png';
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Top() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[100vh] flex items-center justify-center">
        <div>
          <p className="text-[#323142] text-[45px] text-center font-[poppins] font-medium">
            Our Top <span className="text-[#6C5FBC]">Restaurants</span>{" "}
          </p>
          <div className="flex items-center gap-[30px] p-[60px]">
            <div className="h-[320px] w-[396px] shadow-xl rounded-[30px] ">
              <img src={Mask} alt="" />
              <div className="px-3 m-[10px]">
                <button className="h-[35px] w-[85px] bg-amber-100 rounded-[8px] text-[#ffb700]">
                  Healthy
                </button>
                <div className="flex justify-between items-center ">
                  <div className="">
                    <p className="text-[25px] font-[poppins] font-bold text-[#323142] m-1">
                      The Chicken King
                    </p>
                    <div className="flex gap-2 items-center m-1">
                      <p className="text-[18px] text-[#8E97A6]">24min</p>
                      <StarIcon className="text-[#6C5FBc] " />
                      <p className="text-[18px] text-[#8E97A6]">4.8</p>
                    </div>
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon sx={{ fontSize: "34px" }} />}
                      checkedIcon={<BookmarkIcon sx={{ fontSize: "34px" }} />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] w-[396px] shadow-xl rounded-[30px] ">
              <img className="rounded-t-[35px]" src={Image} alt="" />
              <div className="px-3 m-[10px]">
                <button className="h-[35px] w-[85px] bg-amber-100 rounded-[8px] text-[#ffb700]">
                  Healthy
                </button>
                <div className="flex justify-between items-center ">
                  <div className="">
                    <p className="text-[25px] font-[poppins] font-bold text-[#323142] m-1">
                      The Chicken King
                    </p>
                    <div className="flex gap-2 items-center m-1">
                      <p className="text-[18px] text-[#8E97A6]">24min</p>
                      <StarIcon className="text-[#6C5FBc] " />
                      <p className="text-[18px] text-[#8E97A6]">4.8</p>
                    </div>
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon sx={{ fontSize: "34px" }} />}
                      checkedIcon={<BookmarkIcon sx={{ fontSize: "34px" }} />}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[320px] w-[396px] shadow-xl rounded-[30px] ">
              <img src={Mask} alt="" />
              <div className="px-3 m-[10px]">
                <button className="h-[35px] w-[85px] bg-amber-100 rounded-[8px] text-[#ffb700]">
                  Healthy
                </button>
                <div className="flex justify-between items-center ">
                  <div className="">
                    <p className="text-[25px] font-[poppins] font-bold text-[#323142] m-1">
                      The Chicken King
                    </p>
                    <div className="flex gap-2 items-center m-1">
                      <p className="text-[18px] text-[#8E97A6]">24min</p>
                      <StarIcon className="text-[#6C5FBc] " />
                      <p className="text-[18px] text-[#8E97A6]">4.8</p>
                    </div>
                  </div>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon sx={{ fontSize: "34px" }} />}
                      checkedIcon={<BookmarkIcon sx={{ fontSize: "34px" }} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center px-15">
            <a  onClick={() => navigate("/hammasi")}
              className="text-[20px] font-[poppins] flex items-center gap-3 text-[#ACADB9] "
              href="#"
            >
              View All <ArrowForwardIcon />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="h-[100vh] flex items-center justify-center">
        <div>
          <p className="text-[#323142] text-[45px] text-center font-[poppins] font-medium">
            Our Top <span className="text-[#6C5FBC]">Dishes</span>{" "}
          </p>
          <div className="p-[60px] flex items-center justify-center gap-9">
            <div className="h-[425px] w-[225px] bg-[#fff] p-[10px]  shadow-xl rounded-[35px] ">
              <div className="flex justify-end">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <div className="flex justify-center">
                <img src={Food} alt="" />
              </div>
              <button className="h-[25px] w-[60px] bg-amber-100 rounded-[8px] text-[#ffb700]">
                Healthy
              </button>
              <div>
                <p className="text-[20px] font-[poppins] font-bold text-[#323142] m-1">
                  The Chicken King
                </p>
                <div className="flex gap-2 items-center m-1">
                  <p className="text-[16px] text-[#8E97A6]">24min</p>
                  <StarIcon className="text-[#6C5FBc] " />
                  <p className="text-[16px] text-[#8E97A6]">4.8</p>
                </div>
              </div>
              <div className="flex items-center justify-between m-[10px]">
                 <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">$12.<span className="text-[#8E97A6]">99</span></span>
                    <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]"><img src={lop} alt="" /></button>
              </div>
            </div>
            <div className="h-[425px] w-[225px] bg-[#fff] p-[10px]  shadow-xl rounded-[35px] ">
              <div className="flex justify-end">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <div className="flex justify-center">
                <img src={Food} alt="" />
              </div>
              <button className="h-[25px] w-[60px] bg-[#F7C5BA] rounded-[8px] text-[#ff0000]">
                Healthy
              </button>
              <div>
                <p className="text-[20px] font-[poppins] font-bold text-[#323142] m-1">
                Swe Dish
                </p>
                <div className="flex gap-2 items-center m-1">
                  <p className="text-[16px] text-[#8E97A6]">24min</p>
                  <StarIcon className="text-[#6C5FBc] " />
                  <p className="text-[16px] text-[#8E97A6]">4.8</p>
                </div>
              </div>
              <div className="flex items-center justify-between m-[10px]">
                 <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">$19.<span className="text-[#8E97A6]">99</span></span>
                    <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]"><img src={lop} alt="" /></button>
              </div>
            </div>
            <div className="h-[425px] w-[225px] bg-[#fff] p-[10px]  shadow-xl rounded-[35px] ">
              <div className="flex justify-end">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <div className="flex justify-center">
                <img src={Food} alt="" />
              </div>
              <button className="h-[25px] w-[63px] bg-[#33AC64] rounded-[8px] text-[#00ff1e]">
              Supreme
              </button>
              <div>
                <p className="text-[20px] font-[poppins] font-bold text-[#323142] m-1">
                Swe Dish
                </p>
                <div className="flex gap-2 items-center m-1">
                  <p className="text-[16px] text-[#8E97A6]">24min</p>
                  <StarIcon className="text-[#6C5FBc] " />
                  <p className="text-[16px] text-[#8E97A6]">4.8</p>
                </div>
              </div>
              <div className="flex items-center justify-between m-[10px]">
                 <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">$12.<span className="text-[#8E97A6]">99</span></span>
                    <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]"><img src={lop} alt="" /></button>
              </div>
            </div>
            <div className="h-[425px] w-[225px] bg-[#fff] p-[10px]  shadow-xl rounded-[35px] ">
              <div className="flex justify-end">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <div className="flex justify-center">
                <img src={Food} alt="" />
              </div>
              <button className="h-[25px] w-[60px] bg-amber-100 rounded-[8px] text-[#ffb700]">
                Healthy
              </button>
              <div>
                <p className="text-[20px] font-[poppins] font-bold text-[#323142] m-1">
                Chicken Hell
                </p>
                <div className="flex gap-2 items-center m-1">
                  <p className="text-[16px] text-[#8E97A6]">24min</p>
                  <StarIcon className="text-[#6C5FBc] " />
                  <p className="text-[16px] text-[#8E97A6]">4.8</p>
                </div>
              </div>
              <div className="flex items-center justify-between m-[10px]">
                 <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">$12.<span className="text-[#8E97A6]">99</span></span>
                    <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]"><img src={lop} alt="" /></button>
              </div>
            </div>
            <div className="h-[425px] w-[225px] bg-[#fff] p-[10px]  shadow-xl rounded-[35px] ">
              <div className="flex justify-end">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
              <div className="flex justify-center">
                <img src={Food} alt="" />
              </div>
              <button className="h-[25px] w-[60px] bg-[#F7C5BA] rounded-[8px] text-[#ff0000]">
                Healthy
              </button>
              <div>
                <p className="text-[20px] font-[poppins] font-bold text-[#323142] m-1">
                Swe Dish
                </p>
                <div className="flex gap-2 items-center m-1">
                  <p className="text-[16px] text-[#8E97A6]">24min</p>
                  <StarIcon className="text-[#6C5FBc] " />
                  <p className="text-[16px] text-[#8E97A6]">4.8</p>
                </div>
              </div>
              <div className="flex items-center justify-between m-[10px]">
                 <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">$12.<span className="text-[#8E97A6]">99</span></span>
                    <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]"><img src={lop} alt="" /></button>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center px-15">
            <a  onClick={() => navigate("/hammasi")}
              className="text-[20px] font-[poppins] flex items-center gap-3 text-[#ACADB9] "
              href="#"
            >
              View All <ArrowForwardIcon />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
