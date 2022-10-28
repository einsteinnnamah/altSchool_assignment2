import { data } from 'autoprefixer';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';

const Userdata = () => {
const [userData, setData] = useState(null);
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState([])
const [items, setItems] = useState([])
const baseapi =  `https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`;
   useEffect(() => {
    setTimeout( setLoading, 800, true)
        const getData = async() => {
        const response = await axios.get(baseapi) 
        const userResult = response.data.results
        setData(userResult) 
        }
        getData()
    }, [])


    //The issue is from here handlePageClick needs to connect to the api axios
    const handlePageClick = async (data) => {
        console.log(data.selected)
        console.log(currentPage)
        const allUserData = await baseapi(currentPage)
        setItems(allUserData)
    }

     
  return (
    <div className='w-[1200px] mx-auto'>
        <table className='flex items-center  justify-center gap-[10rem] bg-gray-900 px-10 py-[1rem] text-white font-[600] rounded-tr-[1rem] rounded-tl-[1rem]'>
            <div className='flex gap-[5rem]'>
                <div>Image</div>
                <p>Name</p>
            </div>
            <div>Emailaddress</div>
            <div>Country</div>
            <div>Cell No</div>
            <div>Gender</div>
        </table>
        {!loading && <div>Loading</div>}
        <div className='flex flex-col px-10 py-[1rem]  mt-5'>
        {
            userData?.map((yourData, i) =>[
            <div key={yourData.id} className='flex items-center gap-[6rem]  my-[10px]'>
                <div className='flex gap-[3rem] items-center '>
                    <img src={yourData.picture.medium} />
                    <p className='w-[5rem] flex justify-center'>{yourData.name.first}</p>
                </div>
                <p className=' flex justify-start w-[15rem]'>{yourData.email}</p>
                <div className='w-[5rem] '>{yourData.location.country}</div>
                <div className='w-[10rem] '>{yourData.cell}</div>
                <div>{yourData.gender}</div>
            </div>
            ])
        }
            <ReactPaginate className='flex justify-center items-center gap-5'
                previousLabel={'Prev'}
                previousClassName='bg-red-600 px-5 py-2 rounded-full ' 
                nextLabel={'Next'}
                nextClassName='bg-red-600 px-5 py-2 rounded-full '
                breakLabel={''}
                pageCount={5}
                onPageChange={handlePageClick}
            />
        </div>

    </div>
  )
}

export default Userdata