import React from 'react';
import {DiCss3,DiJavascript1,DiReact,DiHtml5,DiBootstrap,DiPython,DiDjango,DiGithubBadge} from "react-icons/di"
import {SiTailwindcss,SiAdobexd} from "react-icons/si"

function Skills() {
  return (
      <>
        <div id='tech' className='max-w-4xl mx-auto flex justify-center pt-12 font-bold' >
            <p className='text-2xl text-black sm:text-8md md:text-8sm font-bold'>SKILLS</p>
        </div>
            <div className=''>
                <p className='text-xl py-5 text-black md:text-2xl font-light text-center'>I'm vey skilled in these fields</p>
                <div className='flex flex-wrap justify-center pt-2'>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiHtml5 color='orange' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>HTML 5</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiCss3 color='blue' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>CSS</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <SiTailwindcss color='blue'   className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Tailwind CSS</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiBootstrap color='blue' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Bootstrap</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiJavascript1 color='orange' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Javascript</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiReact color='skyblue' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>React</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiPython color='orange' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Python</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiDjango color='#0b2407' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Django</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <DiGithubBadge color='black' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>GIT</p>
                    </div>
                    <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                        <SiAdobexd color='#591239' className='mx-auto'/>
                        <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Adobe xd</p>
                    </div>

                </div>
            </div>
      </>
  )
}

export default Skills;
