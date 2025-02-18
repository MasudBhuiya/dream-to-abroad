import React from 'react';
import '../IELTS/IELTS.css'
const IELTS = () => {
    return (
        <div className='ielts md:rounded-3xl px-5 py-14 md:px-12 max-w-[1170px] mx-auto my-16 text-white'>
            <div >
            <p className='text-sm text-center text-[#A8A5E3]'>IELTS</p>
            <h1 className='ielts-header'>We provide IELTS online classes</h1>
            </div>

            <div className='md:flex md:flex-row-reverse gap-16 mt-2 md:mt-6'>

            <section className='w-full md:w-[40%] bg-[#ECEAFF] flex flex-col items-center justify-center rounded-lg md:-my-4 p-14 mb-8 md:mb-0'>
                <h1 className='ielts-design'>IELTS</h1>
                <h1 className='ielts-design2 md:-mt-5 bg-white px-2'>Programme</h1>
            </section>


            <section className='w-full md:w-[60%]'>
            <div className='md:flex gap-5 '>
            <div className='flex flex-col gap-4 mb-4 md:mb-0'>
                <div className='flex gap-2 steps'>
                    <img className='w-6 h-6' src="https://i.ibb.co.com/5X16vhPN/elements-7.png" alt="" />
                    <h1>এক্সপার্ট টিচারদের সাথে 1 to 1 Mock Test & Feedback</h1>
                </div>
                <div className='flex gap-2 steps'>
                    <img className='w-6 h-6' src="https://i.ibb.co.com/5X16vhPN/elements-7.png" alt="" />
                    <h1>Grammar, Pronunciation & Study Abroad নিয়ে Workshop</h1>
                </div>
            </div>
            <div  className='flex flex-col gap-4'>
                <div className='flex gap-2 steps'>
                    <img className='w-6 h-6' src="https://i.ibb.co.com/5X16vhPN/elements-7.png" alt="" />
                    <h1>ELTS পরীক্ষার আগমুহূর্তে Intensive Care & Support</h1>
                </div>
                <div className='flex gap-2 steps'>
                    <img className='w-6 h-6' src="https://i.ibb.co.com/5X16vhPN/elements-7.png" alt="" />
                    <h1>অত্যাধুনিক Computer Lab-এ বিশাল অনলাইন কনটেন্ট লাইব্রেরি</h1>
                </div>
            </div>
            </div>

           <div className='md:flex md:gap-4'>
           <button className='btn text-white w-full sm:w-[170px] mt-6 md:mt-10 bg-[#6757F1] hover:bg-[#796cf0] border-none'>Book Free Class</button>
           <button className='btn text-black w-full sm:w-[170px] mt-4 md:mt-10 bg-white hover:bg-[#dbd9d9] font-semibold border-none'>More Details</button>
           </div>
            </section>

            
            </div>
        </div>
    );
};

export default IELTS;