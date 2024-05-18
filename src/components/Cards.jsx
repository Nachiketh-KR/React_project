import React from 'react'
import Single from '../assets/single.png' 
import Double from '../assets/double.png' 
import Triple from '../assets/triple.png' 


export const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4  bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3 rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className=' text-3xl text-center font-bold '>Rs.149 /-</p>
                <div className='text-center font-semibold'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User </p>
                    <p className='py-2 border-b mx-8 '>Send upto 2GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black ">Get Started</button>
            </div>
            <div className='w-full shadow-2xl bg-gray-100 flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3 rem] bg-white' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className=' text-3xl text-center font-bold '>Rs.249 /-</p>
                <div className='text-center font-semibold'>
                    <p className='py-2 border-b mx-8 mt-8'>750GB Storage</p>
                    <p className='py-2 border-b mx-8 '>2 Granted Users </p>
                    <p className='py-2 border-b mx-8 '>Send upto 4GB</p>
                </div>
                <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto  ">Get Started</button>
            </div>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-[-3 rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Group account</h2>
                <p className=' text-3xl text-center font-bold '>Rs.349 /-</p>
                <div className='text-center font-semibold'>
                    <p className='py-2 border-b mx-8 mt-8'>1500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>3 Granted Users </p>
                    <p className='py-2 border-b mx-8 '>Send upto 6GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black ">Get Started</button>
            </div>
        </div>
    </div>
  )
}
export default Cards;
