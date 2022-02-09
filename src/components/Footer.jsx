/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaGithub, FaGitlab,FaTwitter,FaDev,FaInstagram,FaFacebook } from "react-icons/fa";

function Footer() {
  return (
      <div className='py-5 border-t-3/2 w-full bg-gray-300 rounded'>
          <div className='flex justify-center mt-4'>
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

          <div className='flex justify-center mt-4'>
              <p className='text-black mb-4'>© Copyright 2022© Swathy krishna B. All Rights Reserved </p>

          </div>
      </div>
  )
}

export default Footer;
