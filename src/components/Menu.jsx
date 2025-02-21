import fott from "../assets/fott.png";
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
import lop from "../assets/lop.png";
import Searchs from "../assets/Search.png";
import Meet from "../components/Meet.jsx";
import gpts from "../assets/Pizza.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from "../components/Slider.jsx";
import Queshion from '../components/Queshion.jsx';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Menu() {
  return (
    <div>
      <div className="h-[100vh] flex justify-center items-center gap-[10rem]">
        <div>
          <div className="h-[252px] w-[758px]  bg-linear-to-t bg-[#000000] to-indigo-300 rounded-[19px] flex items-center justify-between p-[40px] gap-8 ">
            <div>
              <p className="text-[75px] text-[#fff] font-black font-[poppins]">
                50% OFF
              </p>
              <p className="text-[75px] text-[#7C6FCD] font-black font-[poppins]">
                WEEKENDS
              </p>
            </div>
            <div>
              <img src={fott} alt="" />
            </div>
          </div>
          <div className="py-[80px]">
            <div className="h-[75px] w-[757px] bg-[#ffffff22] rounded-[19px] flex justify-center items-center  gap-[10px]">
              <a href="/">
                <img src={Searchs} alt="" />
              </a>
              <input
                className="h-[72px] w-[690px] rounded-[19px] outline-none text-[18px]  text-[#000000] "
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              <Meet />
            </div>
          </div>
        </div>
        <div className="h-[592px] w-[377px] rounded-[25px] bg-[#00000030] p-[20px] shadow-xl">
          <div>
            <p className=" py-[10px] text-[22px] text-[#323142] font-[600] font-[poppins]">
              Category
            </p>
            <div className="flex items-center gap-[20px] p-[10px]">
              <div className="h-[100px] w-[68px] bg-[#FFDE8A] rounded-[13px]  flex items-center justify-center">
                <div>
                  <div className="flex justify-center">
                    <img src={gpts} alt="" />
                  </div>
                  <p className="text-[17px] text-[#D69900] text-center p-[10px]">
                    Pizza
                  </p>
                </div>
              </div>
              <div className="h-[100px] w-[68px] bg-[#FB471D] rounded-[13px]  flex items-center justify-center">
                <div>
                  <div className="flex justify-center">
                    <img src={gpts} alt="" />
                  </div>
                  <p className="text-[17px] text-[red] text-center p-[10px]">
                    Asian
                  </p>
                </div>
              </div>
              <div className="h-[100px] w-[68px] bg-[#FFDE8A] rounded-[13px]  flex items-center justify-center">
                <div>
                  <div className="flex justify-center">
                    <img src={gpts} alt="" />
                  </div>
                  <p className="text-[17px] text-[#E28B14] text-center p-[10px]">
                    Donat
                  </p>
                </div>
              </div>
              <div className="h-[100px] w-[68px] bg-[#5A85FF] rounded-[13px]  flex items-center justify-center">
                <div>
                  <div className="flex justify-center">
                    <img src={gpts} alt="" />
                  </div>
                  <p className="text-[17px] text-[#002073] text-center p-[10px]">
                    Ice
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[20px]">
              <p className="text-[22px] text-[#323142] font-[600] font-[poppins]">
                Sort By
              </p>
              <div className="flex justify-between py-[10px]">
                <div>
                  <p className="text-[16px] text-[#ACADB9] p-[5px]">
                    Recomended
                  </p>
                  <p className="text-[16px] text-[#ACADB9] p-[5px]">
                    Most Popular
                  </p>
                </div>
                <a className="text-[#6C5FBC] text-[16px] p-[5px]" href="#">
                  Fast Delivery
                </a>
              </div>
            </div>
            <div>
              <p className="text-[22px] text-[#0d00bd] font-[600] font-[poppins]">
                Price
              </p>
              <div className="flex justify-center my-[10px]">
              </div>
            </div>
            <div className="flex justify-center my-[20px]">
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <Button sx={{width : '313px' , height : '60px' , borderRadius : '15px', background : '#6C5FBC'}} variant="contained" size="large">
                    Apply
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] flex items-center justify-center">
        <div>
          <div className="flex items-center justify-evenly gap-[46rem]">
            <p className="text-[35px] font-[600] font-[poppins]">
              Our Top <span className="text-[#6C5FBC]">Restaurants</span>{" "}
            </p>
            <a
              className="text-[20px] font-[poppins] flex items-center gap-3 text-[#ACADB9] "
              href="#"
            >
              View All <ArrowForwardIcon />{" "}
            </a>
          </div>
          <div className="flex items-center gap-[30px]  p-[80px] ">
            <div className="h-[320px] w-[396px] shadow-xl rounded-[30px]  ">
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
        </div>
      </div>
      <div className="h-[100%] flex items-center justify-center">
        <div>
          <div className="flex items-center justify-evenly gap-[53rem]">
            <p className="text-[35px] font-[600] font-[poppins]">
              Our Top <span className="text-[#6C5FBC]">Dishes</span>{" "}
            </p>
            <a
              className="text-[20px] font-[poppins] flex items-center gap-3 text-[#ACADB9] "
              href="#"
            >
              View All <ArrowForwardIcon />{" "}
            </a>
          </div>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $19.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
              </div>
            </div>
          </div>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $19.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
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
                <span className="text-[24px] text-[#323142] font-bold font-[Manrope]">
                  $12.<span className="text-[#8E97A6]">99</span>
                </span>
                <button className="h-[40px] w-[43px] bg-[#323142] flex justify-center items-center rounded-[9px]">
                  <img src={lop} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] flex justify-center">
           <Queshion/>
      </div>
    </div>
  );
}

export default Menu;
