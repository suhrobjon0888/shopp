import React from "react";
import { Link } from "react-router-dom";
import Queshion from "./Queshion.jsx";
import Email from "./Email.jsx";
import Ellipse from "../assets/Ellipse.png";
import foos from "../assets/foos.png";
import loas from "../assets/loas.png";
import erons from "../assets/erons.png";
import yurt from "../assets/yurt.png";
import lopq from "../assets/lopq.png";

const articles = [
  { id: 1, img: yurt, title: "How To Order Food ?" },
  { id: 2, img: foos, title: "How To Track The Order ?" },
  { id: 3, img: loas, title: "How To Manage Cards ?" },
  { id: 4, img: erons, title: "Tips & Tricks For Business" },
  { id: 5, img: yurt, title: "How To Control Money ?" },
  { id: 6, img: lopq, title: "Top 5 Business Ideas" }
];

function Blog() {
  return (
    <div>
      <Email />
      <div className="h-full p-6 md:p-12">
        <p className="text-3xl md:text-5xl font-bold text-center text-[#323142]">
          Latest <span className="text-[#6C5FBC]">Articles</span>
        </p>
        <div className="flex justify-center items-center flex-wrap p-6 md:p-12 gap-6 md:gap-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="h-auto w-[90%] md:w-[350px] bg-white rounded-2xl p-5 shadow-xl hover:bg-[#6b5fbc22] transition-all duration-500 hover:scale-105"
            >
              <div className="flex justify-center">
                {/* Rasmni bosganda alohida sahifaga yo‘naltiramiz */}
                <Link to={`/yurt/${article.id}`}>
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-auto rounded-lg cursor-pointer"
                  />
                </Link>
              </div>
              <p className="text-lg md:text-2xl text-[#252525] font-medium p-1.5">
                {article.title}
              </p>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <img src={Ellipse} alt="Author" className="w-8 h-8" />
                  <div>
                    <p className="text-sm text-[#8D8D8D]">Written By</p>
                    <button className="text-md font-semibold">Perperzon</button>
                  </div>
                </div>
                <p className="text-sm md:text-md text-[#B7B4B4]">15 DEC, 2022</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full">
        <Queshion />
      </div>
    </div>
  );
}

export default Blog;
