import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div className=' h-10 border-b-[1px] sticky mb-10 flex justify-center items-center '>
        <div className=' w-[1440px] mx-auto flex gap-[2rem] p-10 justify-end'>
          <div>
           <Link to="/" activeClassName='text-gray-900' className='text-gray-900 font-[700]'> Home </Link> 
          </div>
          <div>
            <Link activeClassName='!text-gray-900 font-[700]' className='' to="/Randomuser" >RandomUser</Link> 
          </div>
        </div>
    </div>
  )
}

export default Navigation