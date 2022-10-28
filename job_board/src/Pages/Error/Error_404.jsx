import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../Assets/error.png'
const Error_404 = () => {
  return (
    <div className='w-screen bg-white h-screen absolute '>

    <div className=' translate-x-[-50%] translate-y-[-50%] absolute top-[40%] flex justify-center flex-col items-center left-[50%] border-4 px-20 py-[5rem] border-gray-600  text-center'>
        <p className='font-[700] text-[30px] text-red-500'>Oppss!!! </p>
        <img src={error} />
        <h1 className='mt-5'>
        We searched the entire web and couldn’t find this page. 
        </h1>
        <h2 className='mt-5'>
            Please click the button below to go to the home page
        </h2>
         <button className='bg-gray-500 px-5 py-2 rounded-full mt-5 text-white hover:bg-gray-900 transition-[.5s]' type='button' ><Link to="/">Back to Home page </ Link ></button>
    </div>
    </div>
  )
}

export default Error_404