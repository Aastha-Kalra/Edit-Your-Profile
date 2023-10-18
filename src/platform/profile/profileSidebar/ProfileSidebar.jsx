import React from 'react'
import {BiLogoInstagram} from 'react-icons/bi'
import {IoLogoYoutube} from 'react-icons/io5'

const ProfileSidebar = () => {
  return (
    <>
    <div className='flex flex-col gap-5 mt-14  w-full '>
{/* insta */}
<div className='w-full  flex justify-around items-center md:items-start md:justify-between  md:h-72 bg-violet-600 rounded-2xl md:rounded-lg px-1 md:px-4 py-2 '>
<div className=''>
<span
              className="text-4xl flex justify-center  items-center  rounded-xl bg-gradient-to-r from-yellow-400 to-red-600 w-9 h-9 text-white    
            "
            >
              <BiLogoInstagram className="mix-blend " />{" "}
            </span>
</div>


<div className='flex md:block w-full md:-ml-12 -ml-0 '>


            <span className='md:flex justify-center hidden items-center w-full mt-4'>
                <img src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg" alt=""  className='rounded-full w-28 h-28 border-2 hidden md:block'/>
            </span>

            <div className='flex md:flex-col justify-around  w-full'>
            <div className='flex justify-center items-center md:mt-4 text-white md:font-semibold'>
                John Watson
            </div>
            <div className='flex justify-center items-center  md:mt-4'>
                <div className=' flex w-56 p-2 h-16  justify-around gap-2 items-center bg-white rounded-xl'>
<span className='font-bold flex gap-1 md:flex-col'>
    374
    <p className='md:font-semibold text-sm font-light'>Following</p>
</span>
<span className='border-1 h-10 border-l-2 border-slate-800 hidden md:block'></span>
<span className='font-bold flex justify-center md:flex-col items-center'>
    5.3K
<p className='md:font-semibold text-sm font-light '>Followers</p>
</span>

                </div>
              
            </div>
</div>
          
            </div>

           
</div>


{/* youtube */}
<div className='w-full md:h-72 bg-violet-600 rounded-lg px-1 pb-3 md:p-4 flex justify-around items-center md:items-start md:justify-between'>

    <div className=''>

  
<span
              className="flex text-6xl justify-center items-center  rounded-xl  bg-white w-9 h-6  text-red-600    
            "
            >
              <IoLogoYoutube  className="mix-blend " />{" "}
            </span>
            </div>

            <div className='flex  md:block w-full md:-ml-12 -ml-0'>


          

            <span className='flex justify-center items-center md:mt-4'>
                <img src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg" alt=""  className='rounded-full w-28 h-28 border-2 hidden md:block'/>
            </span>


<div className='flex md:flex-col justify-around  w-full '>

     <div className='flex justify-center items-center mt-4 text-white md:font-semibold '>
                John Watson
            </div>
            <div className='flex justify-center items-center mt-4'>
                <div className=' flex w-56 p-2 h-16 justify-around items-center bg-white rounded-xl gap-2'>
<span className='font-bold flex md:flex-col'>
    374
    <p className='md:font-semibold font-light text-sm'>Subscriber</p>
</span>
<span className='border-1 h-10 border-l-2 border-slate-800 -ml-4 hidden md:block'></span>
<span className='font-bold flex justify-center md:flex-col items-center'>
    5.3K
<p className=' font-light md:font-semibold'>views</p>
</span>

                </div>
            </div>


            </div>
       

            </div>


           
</div>




    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ProfileSidebar