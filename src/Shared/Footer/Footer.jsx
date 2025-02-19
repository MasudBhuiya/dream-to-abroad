import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='relative py-14 bg-[#FAF9FF]'>
            <div className='max-w-[1170px] mx-auto px-5 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 md:gap-10 lg:gap-14'>
                <div>
                    <Link to='/' className="btn btn-ghost ps-0 hover:bg-white text-xl"><img src="https://i.ibb.co.com/gMTgPdQH/elements.png" alt="" /><div>
                        <p className='p-0 font-bold text-start text-[16px] text-[#4B3DBF] m-0'>Dream to</p>
                        <p className='p-0 font-bold text-start text-[16px] text-[#4B3DBF] -mt-2'>Abroad</p>
                    </div></Link>
                    <p className='footer-p mt-8 text'>Dream to Abroad guides you through every step of studying overseas. From university selection to visa support, we're here to make your journey smooth and successful.</p>
                </div>
                <div>
                    <h4>EMAIL</h4>
                    <p className='mt-3 underline'>info@dreamtoabroad.com</p>
                    <h4 className='mt-6'>PHONE</h4>
                    <p className='mt-3'>+8801642453374</p>
                </div>
                <div>
                    <h4>QUICK LINKS</h4>
                    <div className='flex flex-col gap-3 mt-3'>
                    <Link className='link no-underline' to="/">Home</Link>
                    <Link className='link no-underline' to="/service">Service</Link>
                    <Link className='link no-underline' to="/countries">Countries</Link>
                    <Link className='link no-underline' to="/about">About Us</Link>
                    <Link className='link no-underline' to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <div className='flex gap-4 mt-3'>
                        <img src="https://i.ibb.co.com/HLqD4XqY/Linkedin-Logo.png" alt="" />
                        <img src="https://i.ibb.co.com/WW91TC5w/Facebook-Logo.png" alt="" />
                        <img src="https://i.ibb.co.com/6JPR0TFc/Twitter-Logo.png" alt="" />
                    </div>
                </div>
            </div>
            <hr className='my-6 max-w-[1170px] mx-auto border' />
            <p className='text-center'>Copyright @2025 DreamtoAbroad. All right reserved</p>
            <img className='absolute right-0 bottom-0' src="https://i.ibb.co.com/yFWCg8VD/image-4.png" alt="" />
        </div>
    );
};

export default Footer;