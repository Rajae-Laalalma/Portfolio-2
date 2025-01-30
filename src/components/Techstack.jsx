import React from 'react'
import css from '../assets/logocss.png'
import html from '../assets/logo-html.png'
import javascript from '../assets/logo-javascript.png'
import react from '../assets/logo-react.png'
import bootstrap from '../assets/bootstrap.png'
import tailwindcss from '../assets/tailwind-css.png'
import git from '../assets/git.png'
import Vscode from '../assets/visual-studio-code.png'
import mongodb from '../assets/mongodb.png'
import { GrGithub } from "react-icons/gr";

const Techstack = () => {
  
  return (
    <div id="Tech Stack" className='w-full md:h-screen   bg-neutral-300 flex flex-col items-center'>
      <div>
        <h1 className='pt-20 text-4xl text-blue-900 font-title font-bold flex justify-center'>My Tech Stack</h1>
        <p className='flex justify-center text-2xl text-gray-500 py-4'>Technologies I’ve been working with recently</p>
      </div>

     
      <div className='flex flex-wrap justify-center items-center gap-6 mt-10'>
        <div className='flex justify-center items-center w-40  h-40  transform transition-transform duration-300 hover:scale-125'>
          <img src={html} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125 '>
          <img src={css} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125'>
          <img src={javascript} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125'>
          <img src={react} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125'>
          <img src={bootstrap} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125 '>
          <img src={tailwindcss} alt="" className='w-32 h-32' />
        </div>
      </div>

    
      <div className='flex flex-wrap justify-center items-center gap-6 mt-8'>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125'>
          <img src={git} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125'>
          <img src={Vscode} alt="" className='w-32 h-32' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125'>
          <GrGithub size={80} className='text-gray-800' />
        </div>
        <div className='flex justify-center items-center w-40 h-40 transform transition-transform duration-300 hover:scale-125 '>
          <img src={mongodb} alt="" className='w-32 h-32' />
        </div>
      </div>
    </div>
  )
}

export default Techstack
