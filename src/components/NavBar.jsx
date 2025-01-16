import React from 'react'
import { GrGithub } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const NavBar = () => {
    
    const Links=[
        {
              id:1,
        Link:'Home'

        },
        {
            id:2,
      Link:'About'

      },
  {
    id:3,
Link:'Tech Stack'

},
{
id:4,
Link:'Projects'

},
{
  id:5,
  Link:'Contact'
  
  }
    ]
  return (
    <div >
     <div className='w-full h-24   flex  items-center px-20'>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500  font-title text-2xl font-bold '>Rajae LAALAMA</div>
        <ul className='flex  justify-between  items-center px-60  '>
            {
                Links.map(({id,Link})=>(
                     <li key={id} className='px-6   text-gray-600 hover:text-violet-500 transform transition-transform duration-300 hover:scale-125 cursor-pointer'>{Link}</li>
                ))
            }
          
              
        
            </ul>

            <ul className='flex items-center justify-center'>
              <li className=' pl-6  '>
                <span className="text-gray-500 hover:text-violet-300 ">
  <GrGithub size={25} className=''/>
</span> </li>
<span>
  <li className='flex items-center justify-center w-6 h-6 m-2 rounded-full bg-gray-500 hover:bg-violet-300 text-white'><GrLinkedinOption className='w-4 h-4' /></li>
</span>
           
            </ul>
            
        </div>

    </div>
  )
}

export default NavBar
