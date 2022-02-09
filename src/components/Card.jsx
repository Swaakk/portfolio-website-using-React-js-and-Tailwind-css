/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import anjithaa from "../Images/anjithaa.jpg";
import { FaGithub, FaGitlab,FaTwitter,FaDev,FaInstagram,FaFacebook } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">

      <div className="flex flex-col justify-center  ">
        <div className="">
          <img
            className="w-32 mx-auto rounded-full drop-shadow-sm"
            src={anjithaa} />
        </div>
        <div className="text-center mt-5 sm:text-2xl">
          <p className="text-xl text-gray-900">ANJITHA ANILKUMAR</p>
        
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5   text-center ">Chartered Accountant</p>
            
          
        <div className=" flex align-center justify-center  mt-4 border-4 rounded-full  ">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 cursor-pointer  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 ">
                <FaGithub />
                <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 cursor-pointer  text-gray-800 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300 ">
                <FaTwitter />
                <span class="sr-only">Twitter</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 cursor-pointer  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 ">
                <FaDev />
                <span class="sr-only">Dev</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 cursor-pointer  text-gray-800 hover:bg-orange-600 rounded-full hover:text-white transition-colors duration-300 ">
                <FaGitlab />
                <span class="sr-only">Gitlab</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 cursor-pointer  text-gray-800 hover:bg-red-700 rounded-full hover:text-white transition-colors duration-300 ">
                <FaInstagram />
                <span class="sr-only">Instagram</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 cursor-pointer   text-gray-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300 ">
                <FaFacebook />
                <span class="sr-only">Facebook</span>
            </a>


           </div>
          </div>
         </div>
        </div>
  );
}

export default Card;
