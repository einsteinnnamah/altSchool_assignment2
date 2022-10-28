import React from 'react'
import {NavLink} from 'react-router-dom'
const Navigation = () => {
  return (
    <div className=' h-10 border-b-[1px] sticky mb-10 flex justify-center items-center '>
        <div className=' w-[1440px] mx-auto flex gap-[2rem] p-10 justify-end'>
          <div>
           <NavLink to="/" ClassName='active' className=' text-gray-400'> Home </NavLink> 
          </div>
          <div>
            <NavLink ClassName='active' className=' text-gray-400' to="/Randomuser" >RandomUser</NavLink> 
          </div>
        </div>
    </div>
  )
}

export default Navigation