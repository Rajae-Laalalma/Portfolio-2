import React from 'react'
import profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className='flex flex-row justify-center items-center  w-full h-screen  '>
        <div className='  text-4xl font-title font-bold text-blue-900 pr-40'>
            
            <h1 className=''>Hi 👋,</h1>
<h1 className='uppercase py-2'>My name is</h1>
<span className='uppercase py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500'>Rajae Laalalma</span>
<h1 className='uppercase py-2'>I build things for web</h1>
<div className='py-4'>
   <button className='text-xl  text-white bg-gradient-to-r from-blue-500 to-violet-500 w-32  h-11 rounded font-normal transform transition-transform duration-300 hover:scale-125'>Portfolio</button> 
</div>

</div>

      <div className='w-80 h-80 rounded-full'><img src={profile} alt=""  className=' w-80 h-80  rounded-full border-4 border-transparent bg-clip-border bg-gradient-to-r from-blue-500 to-violet-600  '/></div>
    </div>
  )
}

export default Home
