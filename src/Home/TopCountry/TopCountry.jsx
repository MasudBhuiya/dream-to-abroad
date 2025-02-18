import React from 'react';
import '../TopCountry/TopCountry.css'
const TopCountry = () => {
    return (
        <div className='my-20'>

        <div className='  top-country py-20'>

            <p className='top px-5'>TOP COUNTRY</p>
            <h1 className='country-header px-5'>Best Country to study abroad</h1>

            <div className='mt-12 max-w-[1440px] mx-auto px-5 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-5'>
                <div className='country-img1 h-[220px] mx-auto sm:mx-0 rounded-2xl relative w-[100%] sm:w-[195px] '>
                    <div className='absolute bottom-4 left-3'>
                    <img  src="https://i.ibb.co.com/ccjH0fnW/image-3.png" alt="" />
                    <p className=' text-sm mt-1 text-white'>USA</p>
                    </div>
                </div>
                <div className='country-img2 h-[220px] mx-auto sm:mx-0 rounded-2xl relative w-[100%] sm:w-[195px] '>
                    <div className='absolute bottom-4 left-3'>
                    <img  src="https://i.ibb.co.com/9HzdFX73/image-2.png" alt="" />
                    <p className=' text-sm mt-1 text-white'>Australia</p>
                    </div>
                </div>
                <div className='country-img3 h-[220px] mx-auto sm:mx-0 rounded-2xl relative w-[100%] sm:w-[195px] '>
                    <div className='absolute bottom-4 left-3'>
                    <img  src="https://i.ibb.co.com/jkBWvR7T/image-4.png" alt="" />
                    <p className=' text-sm mt-1 text-white'>Canada</p>
                    </div>
                </div>
                <div className='country-img4 h-[220px] mx-auto sm:mx-0 rounded-2xl relative w-[100%] sm:w-[195px] '>
                    <div className='absolute bottom-4 left-3'>
                    <img  src="https://i.ibb.co.com/whMNwTYL/image-5.png" alt="" />
                    <p className=' text-sm mt-1 text-white'>United Kingdom</p>
                    </div>
                </div>
                <div className='country-img5 h-[220px] mx-auto sm:mx-0 rounded-2xl relative w-[100%] sm:w-[195px] '>
                    <div className='absolute bottom-4 left-3'>
                    <img  src="https://i.ibb.co.com/cSQghpDV/image-6.png" alt="" />
                    <p className=' text-sm mt-1 text-white'>Europe</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>

            <button className='btn text-white px-5  mt-12 bg-[#6757F1] hover:bg-[#796cf0]'>View All Countries</button>
            </div>

            
        </div>


{/* how we work section  */}

<div className='mt-20'>
<h1 className='work-header'>How we work</h1>

<div className='grid grid-cols-1 sm:grid-cols-3 items-center justify-evenly max-w-[750px] mx-auto mt-12'>
    <div className='flex flex-col mb-6 sm:mb-0 items-center '>
        <img src="https://i.ibb.co.com/xpB9YqC/Checkmark.png" alt="" />
        <p className='text-xs text-[#3E61A0] mt-1'>Step 01</p>
        <p className='font-bold  '>Consult</p>
    </div>
    <div className='flex flex-col mb-6 sm:mb-0 items-center '>
        <img src="https://i.ibb.co.com/xpB9YqC/Checkmark.png" alt="" />
        <p className='text-xs text-[#3E61A0] mt-1'>Step 02</p>
        <p className='font-bold  '>Match Destination</p>
    </div>
    <div className='flex flex-col mb-6 sm:mb-0 items-center '>
        <img src="https://i.ibb.co.com/xpB9YqC/Checkmark.png" alt="" />
        <p className='text-xs text-[#3E61A0] mt-1'>Step 03</p>
        <p className='font-bold  '>Meet Your Dream</p>
    </div>
</div>
</div>

</div>
    );
};

export default TopCountry;