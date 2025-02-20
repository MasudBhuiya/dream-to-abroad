import React from 'react';

import '../Service/Service.css'

const Service = () => {
    return (
        <div className='mt-20 max-w-[1440px] mx-auto px-5'>
            <p className='service'>SERVICES</p>
            <h1 className='service-header'>What We Offers?</h1>

            <div className=' grid grid-cols-2 mx-auto sm:flex sm:flex-wrap items-center mt-10 gap-4 sm:gap-6 justify-center'>
                <div className='border cart w-full sm:w-[170px] p-3 rounded-xl'>
                    <img className='w-10 h-10' src="https://i.ibb.co.com/bhV25pS/elements-3.png" alt="" />
                    <p className='cart-text mt-4'>Carrer <br />Counselling</p>
                </div>
                <div className='border cart w-full sm:w-[170px] p-3 rounded-xl'>
                    <img className='w-10 h-10' src="https://i.ibb.co.com/xtsQgnTr/elements-4.png" alt="" />
                    <p className='cart-text mt-4'>Carrer <br />Counselling</p>
                </div>
                <div className='border cart w-full sm:w-[170px] p-3 rounded-xl'>
                    <img className='w-10 h-10' src="https://i.ibb.co.com/fGYyfF5h/elements-5.png" alt="" />
                    <p className='cart-text mt-4'>Carrer <br />Counselling</p>
                </div>
                <div className='border cart w-full sm:w-[170px] p-3 rounded-xl'>
                    <img className='w-10 h-10' src="https://i.ibb.co.com/CsDWYzRR/elements-6.png" alt="" />
                    <p className='cart-text mt-4'>Carrer <br />Counselling</p>
                </div>
            </div>
        </div>
    );
};

export default Service;