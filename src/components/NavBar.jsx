import React, { useState } from 'react';
import { GrGithub } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";



const NavBar = () => {

  const [nav,setNav]=useState(false);
    
    const links=[
        {
              id:1,
        link:'Home'

        },
      
  {
    id:2,
link:'Tech Stack'

},
{
id:3,
link:'Projects'

},
{
  id:4,
  link:'Contact'
  
  }
  

    ]
  return (
    <div >
     <div className='w-full h-24   flex justify-between  items-center px-20 '>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500  font-title text-2xl font-bold '>Rajae LAALAMA</div>
        <ul className='hidden md:flex  justify-between  items-center px-60  '>
            {
                links.map(({id,link})=>(
                     <li key={id} className='px-6   text-gray-600 hover:text-violet-500 transform transition-transform duration-300 hover:scale-125 cursor-pointer'>
                       <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))
            }
          
              
        
            </ul>

            <ul className='hidden md:flex items-center justify-center '>
              <li className=' pl-6  '>
                <span className="text-gray-500 hover:text-violet-300  ">
  <GrGithub size={25} className=' transform transition-transform duration-300 hover:scale-125'/>
</span> </li>
<span>
  <li className='flex items-center justify-center w-6 h-6 m-2 rounded-full bg-gray-500 hover:bg-violet-300 text-white  transform transition-transform duration-300 hover:scale-125 '><GrLinkedinOption className='w-4 h-4' /></li>
</span>
           
            </ul>
            <div onClick={()=>setNav(!nav)} className='md:hidden z-10'>
              {nav?<FaTimes size={25} className='text-gray-500' />:<FaBars size={25} className='text-gray-500'/>}
            
            </div>
            {nav &&(
                 <ul className=' md:hidden  flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-blue-500 to-violet-500 '>
            {
                links.map(({id,link})=>(
                     <li key={id} className='py-4 text-white cursor-pointer font-title text-2xl'>
                      <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
                     
                ))
            }
          
             
            
            </ul>
            )}
         
        </div>
        

    </div>
  )
}

export default NavBar
