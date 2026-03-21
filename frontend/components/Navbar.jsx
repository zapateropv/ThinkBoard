import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around gap-5 p-3 bg-[#110f0f]'>
      <div>
        <p className='text-green-600 text-4xl font-bold'>ThinkBoard</p>
      </div>
      <div>
          <Link to={"/notes/create"} className='bg-green-600 hover:bg-green-700 px-4 py-3 rounded-full cursor-pointer font-bold'>
          + New Note
          </Link>
      </div>
    </div>
  )
}

export default Navbar
