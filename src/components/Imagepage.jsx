import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function Imagepage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === parseInt(id)); 

  if (!article) {
    return <p className="text-center text-red-500 text-2xl">Image not found!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-[#6C5FBC] text-white rounded-lg shadow-md hover:bg-[#5a4aad] transition-all"
      >
        ← Go Back
      </button>
      <img
        src={article.img}
        alt={article.title}
        className="w-auto h-[500px] rounded-lg shadow-lg"
      />
      <p className="text-xl mt-4 font-semibold text-[#323142]">{article.title}</p>
    </div>
  );
}

export default Imagepage;
