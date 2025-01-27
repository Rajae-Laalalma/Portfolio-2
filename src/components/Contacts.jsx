import React from 'react'

const Contacts = () => {
  return (
    <div name='contact'>
      <div id="Contact" className='w-full h-screen bg-blue-400'>
        <div><p>Contact</p>
        <p>Submit ther form below to get in touch whit me</p></div>
        <div className='flex justify-center items-center '>
          <form action="https://getform.io/f/bnllrejb" method="POST" className='flex flex-col gap-4 '>
          <input type="text" name="name" placeholder='enter your name ' className='rounded px-2 '/>
          <input type="text" name="email" placeholder='enter your email' className='rounded'/>
          <textarea name="message" id="" rows={10} className='rounded'></textarea>
          <button className='w-32 h-10 rounded bg-violet-500'>Lat s talk</button>
        </form>
        </div>
        

      </div>
    </div>
  )
}

export default Contacts
