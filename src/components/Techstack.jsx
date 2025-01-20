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
    <div className=' w-full h-screen bg-neutral-300 '>
      <div>
        <h1 className='pt-10 text-4xl text-blue-900 font-title font-bold flex justify-center '> My Tech Stack</h1>
        <p className='flex justify-center text-2xl text-gray-500 py-4'> Technologies I’ve been working with recently</p>
        </div>

         <div className='flex  w-40 h-40 border border-red-500'> 
      <img src={html} alt="" className=' border border-red-500 w-40 h-40 ' />
      <img src={css} alt="" className='border border-red-500' />
      <img src={javascript} alt="" className='border border-red-500'/>
      <img src={react} alt="" className='border border-red-500'/>
      <img src={bootstrap} alt="" className='border border-red-500'/>
      <img src={tailwindcss} alt="" className='border border-red-500'/>
      

     </div>
     
      <div className='flex'>
      <img src={git} alt="" />
      <img src={Vscode} alt="" />
       <GrGithub size={150} className=''/>
      <img src={mongodb} alt="" />
      </div>
    </div>
  )
}

export default Techstack
