import React from "react";
import Laptop from "../assets/laptop.jpg"
const Analytics = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img className='w-[400px] mx-auto my-4' src={Laptop} alt="/" />
              <div>
                <p className="text-[#00df9a]  fond-bold "> DATA ANALYTICS DASHBOARD</p>
                <h1 className="text-xl font-bold" >Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Hic dignissimos, perspiciatis dolorum ab doloribus ex omnis, 
                    laboriosam provident,amet debitis cumque atque dolore accusantium 
                    labore sequi? Nostrum in temporibus sed nobis excepturi aut tempora 
                    illum doloremque. Similique voluptatem nihil fuga?</p>
                 <div>
                 <button className="bg-[#000300] w-[200px] rounded-md font-medium my-5 py-3 mx-auto text-[#00df9a] ">Get Started</button>
                 </div>
              </div>
            </div>

        </div>
    )
}
export default Analytics;