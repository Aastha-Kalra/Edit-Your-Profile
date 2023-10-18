import React,{useEffect} from 'react';

import {AiFillBell, AiOutlineHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineBell} from 'react-icons/ai'
import {PiHandbagLight} from 'react-icons/pi'
import {GiHamburgerMenu} from 'react-icons/gi'
const Nav = () => {


  return (
    <>
    {/* for desktop */}
    <div className='w-full text-white h-16 hidden bg-violet-500 sm:flex justify-around items-center tracking-wider px-16'>
        <div className='font-bold text-lg'>platform</div>
        <div className='w-1/2'>
        <input className='w-full h-10 border-2 rounded-2xl text-white/80 bg-transparent  pl-14 focus:outline-none' placeholder='Search for creators,inspiration and projects'>


</input>
        </div>
        <div className='flex flex-row gap-5'>
            <span className='rounded-full w-9 h-9 bg-violet-300 flex justify-center items-center text-violet-600'>

<span className='text-4xl -mt-1'>+</span>

            </span>
            <span className='rounded-full bg-black border-2  flex justify-center items-center  w-9 h-9'>
                <img src="images/MickeyMouse.png" className='w-6' alt="" />
            </span>
        </div>
    </div>
{/* for mobile */}
<div className='w-full h-16 drop-shadow-xl bg-violet-600 rounded-b-2xl block sm:hidden'>
  <ul className='flex justify-around items-center py-4 font-semibold text-white/80 text-3xl'>
    <li>
      <AiOutlineHome/>
    </li>
    <li>
      <AiOutlineSearch/>
    </li>
    <li>
      <AiOutlineBell/>
    </li>
    <li>
      <PiHandbagLight/>
    </li>
    <li>
      <GiHamburgerMenu/>
    </li>
  </ul>

</div>


    </>
  )
}

export default Nav