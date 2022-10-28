import { data } from 'autoprefixer';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import Pagination from '../Components/Pagination';
const Userdata = () => {
const [userData, setData] = useState(null);
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const baseapi = "https://randomuser.me/api/?results=5";
   useEffect(() => {
    setTimeout( setLoading, 800, true)
        const getData = async() => {
                const response = await axios.get(baseapi) 
                const userResult = response.data.results
                console.log(response.data.results)
                setData(userResult) 
        }
        getData()
    }, [])
    
    console.log(userData)
    console.log(loading)

  return (
    <div className='w-[1200px] mx-auto'>
        
        <div className='flex items-center  justify-center gap-[10rem] bg-gray-400 px-10 py-[1rem] text-black font-[600] rounded-tr-[1rem] rounded-tl-[1rem]'>
            <div className='flex gap-[3rem]'>
                <div>Image</div>
                <p>Name</p>
            </div>
            <div>Emailaddress</div>
            <div>Country</div>
            <div>Cell No</div>
            <div>Gender</div>
        </div>
        {!loading && <div>Loading</div>}
        <div className='flex flex-col px-10 py-[1rem]  mt-5'>
        {
            userData?.map((yourData, i) =>[
            <div key={yourData.id} className='flex items-center gap-[6rem]  my-[10px]'>
                <div className='flex gap-[3rem] items-center '>
                    <img src={yourData.picture.medium} />
                    <p className='w-[5rem] bg-red-600 flex justify-center'>{yourData.name.first}</p>
                </div>
                <p className=' bg-red-900 flex justify-start w-[15rem]'>{yourData.email}</p>
                <div className='w-[5rem] bg-red-500'>{yourData.location.country}</div>
                <div className='w-[10rem] bg-red-500 '>{yourData.cell}</div>
                <div>{yourData.gender}</div>
            </div>
            ])
        }
            <Pagination />
        </div>

    </div>
  )
}

export default Userdata