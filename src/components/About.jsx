import React from 'react';
import {FaArrowDown} from "react-icons/fa"


function About() {
  return (
      <div className='max-w-4xl mt-20 mx-auto'>
          <p className='text-2xl text-black sm:text-8md md:text-8sm font-bold text-center'>ABOUT ME👋</p>
          <p className='text-base sm:text-2xl text-center font-Poppins text-gray-500 mt-5'>To seek and maintain a full-time position that offers
            professional challenges utilizing interpersonal skills,excellent time management and problem-solving skills</p>

          <div className='mx-auto p-20'>
              <FaArrowDown className="animate-ping mx-auto text-3xl cursor-pointer text-blue-500 drop-shadow-2xl"/>
          </div>
     
    </div>
  )
}

export default About;





