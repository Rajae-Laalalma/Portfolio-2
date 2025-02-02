import React from 'react'
import profile from '../assets/profile.jpg'
import cv from '../assets/cv-Rajae-Laalalma.pdf'


const Home = () => {



  return (

    <div id="Home" data-aos='fade-up' data-aos-delay='500' className='md:flex md:flex-row  justify-center items-center  w-full h-screen px-10 py-10  '>
      <div className='  text-4xl font-title font-bold text-blue-900 md:pr-40 dark:text-gray-300'>

        <h1 className=''>Hi 👋,</h1>
        <h1 className='uppercase py-2 '>My name is</h1>
        <span className='uppercase py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 '>Rajae Laalalma</span>
        <h1 className='uppercase py-2'>I build things for web</h1>
        <div className='py-6'> <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 h-10 flex items-center justify-center rounded-2xl text-xl bg-violet-700 md:text-xl text-white transition duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 dark:text-gray-300"
        >
          Portfolio
        </a></div>


      </div>

      <div className='w-80 h-80 rounded-full mx-20 m-10 md:mx-8  '>
        <img src={profile} alt="" className='  md:w-80 md:h-80 h-60 w-60 rounded-full border-4 border-transparent bg-clip-border bg-gradient-to-r from-blue-500 to-violet-600 transform transition-transform duration-300 hover:scale-125 cursor-pointer    ' />
      </div>

    </div>

  )
}

export default Home
