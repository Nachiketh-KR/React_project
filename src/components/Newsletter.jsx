import React from 'react'

export const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white '>
      <div className='mx-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4 ml-20'>
          <h1 className='md:text-3xl sm:text-4xl text-2xl font-bold '>Want tips & tricks to optimise your flow?</h1>
          <p >Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4 mr-20'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
            <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter your email' />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-3 mr-2 my-6 py-2 text-black ">Notify me</button>
          </div>
          <p>We care about the protection of your data .Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  )
}
export default Newsletter;
