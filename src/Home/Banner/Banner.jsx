import React from 'react';
import '../Banner/Banner.css'
const Banner = () => {
    return (
        <div className='banner w-full h-[50vh] md:h-[80vh]'>
           <div className='px-5 max-w-[1440px] mt-[7vh] md:pt-[15vh] mx-auto'>
            <h1 className='banner-header text-4xl md:text-5xl text-center md:text-start'>Move Student</h1>
            <h1 className='banner-sub-header text-4xl md:text-5xl my-3 md:text-start'>To Their Dream Country</h1>
            <p className='banner-p text-lg md:text-xl md:text-start'>Identify the problem and work on solving it</p>
           <button className='btn text-white px-5 w-full md:w-fit mt-6 md:mt-12 bg-[#6757F1]'>Book a call</button>
           </div>
        </div>
    );
};

export default Banner;