import React from 'react';
import '../Banner/Banner.css'
const Banner = () => {
    return (
        <div className='banner flex flex-col w-full h-[50vh] md:h-[80vh] justify-center '>
           <div className='px-5'>
            <h1 className='banner-header'>Move Student</h1>
            <h1 className='banner-sub-header'>To Their Dream Country</h1>
            <p className='banner-p'>Identify the problem and work on solving it</p>
           <button className='btn text-white px-5  mt-12 bg-[#6757F1]'>Book a call</button>
           </div>
        </div>
    );
};

export default Banner;