import React from 'react'
import profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className='md:flex md:flex-row  justify-center items-center  w-full h-screen px-10 py-10 '>
        <div className='  text-4xl font-title font-bold text-blue-900 md:pr-40'>
            
            <h1 className=''>Hi 👋,</h1>
<h1 className='uppercase py-2'>My name is</h1>
<span className='uppercase py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500'>Rajae Laalalma</span>
<h1 className='uppercase py-2'>I build things for web</h1>


</div>

      <div className='w-80 h-80 rounded-full mx-40 m-20 md:mx-8  '><img src={profile} alt=""  className=' w-80 h-80  rounded-full border-4 border-transparent bg-clip-border bg-gradient-to-r from-blue-500 to-violet-600  '/></div>
    </div>
  )
}

export default Home
