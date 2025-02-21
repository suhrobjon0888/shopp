import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Food from "../assets/food.png";
import lop from "../assets/lop.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function All() {
    return (
        <div>
            <div className="h-[100%]">
                <p className="text-center text-[#323142] text-[45px] font-[poppins] font-medium">Our Top <span className="text-[#6C5FBC]">Dishes</span> </p>
                <div className="p-[60px] flex items-center justify-center gap-9 flex-wrap">
                    .   <div className="flex flex-wrap justify-center gap-4 p-4">
                        <div className="h-[425px] w-[225px] bg-[#fff] p-[10px] shadow-xl rounded-[35px] sm:w-[300px] md:w-[350px]">
                            <div className="flex justify-end">
                                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            </div>
                            <div className="flex justify-center">
                                <img src={Food} alt="" className="w-full h-auto max-h-[150px]" />
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
                                    <StarIcon className="text-[#6C5FBc]" />
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
                        <div className="h-[425px] w-[225px] bg-[#fff] p-[10px] shadow-xl rounded-[35px] sm:w-[300px] md:w-[350px]">
                            <div className="flex justify-end">
                                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            </div>
                            <div className="flex justify-center">
                                <img src={Food} alt="" className="w-full h-auto max-h-[150px]" />
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
                                    <StarIcon className="text-[#6C5FBc]" />
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
                        <div className="h-[425px] w-[225px] bg-[#fff] p-[10px] shadow-xl rounded-[35px] sm:w-[300px] md:w-[350px]">
                            <div className="flex justify-end">
                                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            </div>
                            <div className="flex justify-center">
                                <img src={Food} alt="" className="w-full h-auto max-h-[150px]" />
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
                                    <StarIcon className="text-[#6C5FBc]" />
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
                    </div>  .
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
                </div>
            </div>
        </div>
    )
}

export default All