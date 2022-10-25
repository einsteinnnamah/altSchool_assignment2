import React from 'react'
import { useState } from 'react'

const Userdata = () => {
    const [userData, setUserData] = useState()
  return (
    <div className=' w-[1440px] m-[auto] mt-[10rem] flex flex-col items-center justify-center '>
        <div className='flex gap-[10rem] bg-gray-400 px-10 py-[1rem] text-black font-[600] rounded-tr-[1rem] rounded-tl-[1rem]'>
            <div className='flex gap-[2rem]'>
                <div>user img</div>
                <p>user name</p>
            </div>
            <div>Emailaddress</div>
            <div>PDF</div>
            <div>001</div>
            <div>Gender</div>
        </div>
            <div className='flex gap-[10rem] mt-5'>
            <div className='flex gap-[2rem]'>
                <div>user img</div>
                <p>user name</p>
            </div>
            <div>Emailaddress</div>
            <div>PDF</div>
            <div>001</div>
            <div>input</div>
            </div>

    </div>
  )
}

export default Userdata