import React from "react";
import { useParams } from "react-router-dom";
import Images from "../assets/images.png";
import foos from "../assets/foos.png";
import loas from "../assets/loas.png";
import erons from "../assets/erons.png";
import yurt from "../assets/yurt.png";
import lopq from "../assets/lopq.png";

const articles = [
  { id: 1, img: Images, title: "How To Order Food ?" },
  { id: 2, img: foos, title: "How To Track The Order ?" },
  { id: 3, img: loas, title: "How To Manage Cards ?" },
  { id: 4, img: erons, title: "Tips & Tricks For Business" },
  { id: 5, img: yurt, title: "How To Control Money ?" },
  { id: 6, img: lopq, title: "Top 5 Business Ideas" }
];

function Blogimg() {
  const { id } = useParams(); // URL'dan id ni olish
  const article = articles.find((a) => a.id === parseInt(id)); // id bo‘yicha maqolani topish

  if (!article) {
    return <p className="text-center text-red-500 text-2xl">Article not found!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <p className="text-3xl md:text-4xl font-bold text-[#323142] text-center mb-6">
        {article.title}
      </p>
      <div className="flex justify-center w-[90%] md:w-[600px]">
        <img src={article.img} alt={article.title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Blogimg;
