import React from 'react'
import { GrGithub } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: 'Home'

    },

    {
      id: 2,
      link: 'Tech Stack'

    },
    {
      id: 3,
      link: 'Projects'

    },
    {
      id: 4,
      link: 'Contact'

    }
  ]
  return (
   
      <div className='pt-[200px]  ' data-aos='fade-up' data-aos-delay='100'>
        <div className='w-full h-24   flex justify-between  items-center md:px-20 '>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500  font-title text-2xl font-bold px-4  whitespace-nowrap'>Rajae LAALAMA</div>
        
       <ul className=' flex items-center justify-center '>
        <li className='text-gray-500 '>rajaerajaela@gmail.com</li>
                 <li className=' md:pl-14 pl-6'>
                   <span className="text-gray-500 hover:text-violet-300  ">
                     <a href="https://github.com/Rajae-Laalalma" target="_blank" rel="noopener noreferrer"
                       aria-label="Github Profile">
                       <GrGithub size={25} className=' transform transition-transform duration-300 hover:scale-125' />
                     </a>
       
                   </span> </li>
                 <span>
                   <li className='flex items-center justify-center w-6 h-6 m-2 rounded-full bg-gray-500 hover:bg-violet-300 text-white  transform transition-transform duration-300 hover:scale-125 '>
                     <a href="https://www.linkedin.com/in/rajae-laalalma/" target="_blank" rel="noopener noreferrer">
                       <GrLinkedinOption className='w-4 h-4' />
                     </a></li>
                 </span>
       
               </ul>
      
        </div>
        <div className="border border-gray-400 md:w-[1400px]  w-[450px] mx-auto"></div>

      <div className=' w-full h-24   flex justify-center  items-center px-[100px] '>
              
              <ul className=' flex  justify-between  items-center px-60  '>
                {
                  links.map(({ id, link }) => (
                    <li key={id} className='px-6   text-gray-600 hover:text-violet-500  cursor-pointer whitespace-nowrap'>
                      <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                  ))
                }
      
      
      
              </ul>
      
              </div>
             
       </div>
      
   
  )
}

export default Footer
