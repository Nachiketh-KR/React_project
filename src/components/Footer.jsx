import React from 'react'
import {
     FaDribbbleSquare,
     FaFacebookSquare,
     FaGithubSquare,
     FaInstagram,
     FaTwitterSquare,
}from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='max-w-[1240px] bg-#000300 mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NACHH.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur 
            voluptate enim fuga molestias voluptates ab doloremque accusamus
             quod ipsum mollitia.</p>
             <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
             </div>
        </div>
        <div className='lg:col-span-2 flex justify-between '>
            <div>
                <h6 className='font-bold text-gray-500' >Solutions</h6>
                <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insigths</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold text-gray-500' >Support</h6>
                <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API status</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold text-gray-500' >Company</h6>
                <ul>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blogs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Company</li>

                </ul>
            </div>
            <div>
                <h6 className='font-bold text-gray-500' >Legal</h6>
                <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Footer