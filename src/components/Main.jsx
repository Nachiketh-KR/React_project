import React from "react";
import  {ReactTyped}  from 'react-typed';
const Main = () => {
    return(
        <div className="text-white">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold md:text-3xl p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-4xl text-4xl font-bold md:py-6" >Grow with Data</h1>
            <div>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible and facinating for <ReactTyped strings={["BTB","BTC","SAAS"]} typeSpeed={120} backSpeed={120} loop className="font-bold text-gray-500 md:text-5xl"/></p>
            </div>
            <p className="md:text-2xl text-l font-bold text-gray-500 p-4">Monitor your data analytics to increase your revenue for BTC,BTB,SAAS</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-4 mx-auto text-black ">Get Started</button>
          </div>
        </div>
    )
}
export default Main