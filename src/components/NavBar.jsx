import React from 'react'

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
  Link:'About'

  }
    ]
  return (
    <div >
     <div className='w-full h-24 border border-red-600  flex justify-between  items-center px-4'>
        <div>Rajae Laalalma</div>
        <ul className='flex  justify-between items-center  border border-red-600'>
            {
                Links.map(({id,Link})=>(
                     <li key={id} className='px-4 '>{Link}</li>
                ))
            }
           
            </ul>
        </div>

    </div>
  )
}

export default NavBar
