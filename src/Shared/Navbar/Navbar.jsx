

import { Link } from 'react-router-dom';
const Navbar = () => {
// console.log(user);
// const handleLogout = ()=>{
//   logOut()
//   .then()
//   .catch(error=>{
//     console.log(error);
//   })
// }
  return (
      
      <div>
          <div className="navbar max-w-[1400px] mx-auto ">
<div className="navbar-start w-fit">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/">Home</Link></li>
      <li><Link to="/destination">Study Destination</Link></li>
      <li><Link to="/university">Find University</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/networking">Networking</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <div className='flex gap-6 mt-3'>
      <Link className='flex items-center gap-2 mr-6 text-[16px] font-semibold'>
<img className='' src="https://i.ibb.co.com/xq5pVQW7/elements-2.png" alt="" />
    <p className=''>Login</p>
</Link>
<button className="btn bg-[#6757F1] rounded-3xl px-6 text-white">Sign Up</button>
      </div>
    </ul>
    
  </div>
  <Link to='/' className="btn btn-ghost ps-0 hover:bg-white text-xl"><img src="https://i.ibb.co.com/gMTgPdQH/elements.png" alt="" /><div>
  <p className='p-0 font-bold text-start text-[16px] text-[#4B3DBF] m-0'>Dream to</p>
  <p className='p-0 font-bold text-start text-[16px] text-[#4B3DBF] -mt-2'>Abroad</p>
    </div></Link>
</div>
<div className=" hidden lg:flex items-center justify-center w-full">
  <ul className="menu menu-horizontal  font-semibold px-1">
  <li><Link to="/">Home</Link></li>
      <li><Link to="/destination">Study Destination</Link></li>
      <li><Link to="/university">Find University</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/networking">Networking</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
  </ul>
</div>
<div className="navbar-end gap-4 w-fit text-2xl hidden lg:flex">
<Link className='flex items-center gap-2 mr-6 text-[16px] font-semibold'>
<img className='' src="https://i.ibb.co.com/xq5pVQW7/elements-2.png" alt="" />
    <p className=''>Login</p>
</Link>
<button className="btn bg-[#6757F1] rounded-3xl px-6 text-white">Sign Up</button>
</div>
</div>
      </div>
  );
};

export default Navbar;