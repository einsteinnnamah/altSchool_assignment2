import React from 'react'
import {Link} from 'react-router-dom'
import entry from '../Assets/entry.png'
const Home = () => {
  return (
    <div className='w-screen bg-white h-screen absolute '>

    <div className=' translate-x-[-50%] translate-y-[-50%] absolute top-[40%] flex justify-center flex-col items-center left-[50%] border-4 px-20 py-[3rem] border-gray-600  text-center'>
        <p className='font-[700] text-[30px]'>Welcome </p>
        <img src={entry} />
        <h1 className='mt-5'>
           We are glad to have you on the platform 
        </h1>
        <h2 className='mt-5'>
           You can click this button to move to the random user generator page
        </h2>
         <button className='bg-gray-500 px-5 py-2 rounded-full mt-5 text-white hover:bg-gray-900 transition-[.5s]' type='button' ><Link to="/Randomuser">Generate Random User </ Link ></button>
    </div>
    </div>
  )
}

export default Home