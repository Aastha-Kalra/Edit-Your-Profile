import React from 'react'
import {HiPencil} from 'react-icons/hi'
import ProfileSidebar from './profileSidebar/ProfileSidebar'
const Profile = () => {
  return (
    <>
    {/*background image */}
    <div className='h-fit w-[100%] mt-10 flex flex-col gap-40 tracking-wider'>
   
    <div className='rounded-md md:relative absolute md:top-0 top-44 w-full h-20 mt-4 pr-5 md:pr-0'>
       <div className=''>
       <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" alt="" className='rounded-2xl h-40 w-full pr-2 sm:pr-0'/>
        <div className='relative left-[85%] bottom-32 rounded-full bg-violet-600 text-white w-10 h-10 flex justify-center items-center cursor-pointer'>
                    
        <HiPencil size={28}/>
        </div>
       </div>
        <div className='flex justify-center items-center md:justify-start gap-4 ml-8 flex-col md:flex-row'>

<div className='w-20 h-20 rounded-full -mt-20 '>
    <img src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg"  className='rounded-full' alt="" />
</div>
        
<div className='md:-mt-8 flex justify-center flex-col items-center'>
<p className='font-bold text-xl'>
    John Watson
</p>
<p className='text-sm '>
    UI/UX designer
</p>
</div>
</div>
     
</div>
   
   <div className='flex flex-col gap-5'>
    {/* tabs */}
    <div className='flex bg-white w-full h-16 justify-between px-3 lg:px-9 shadow-lg  items-center rounded-xl font-bold '>
<div className='bg-violet-600 w-52 flex justify-center items-center h-10 text-white rounded-lg font-semibold'>Profile info </div>
<div className=' w-52 flex justify-center items-center h-10 rounded-lg'>Messages</div>
<div className=' w-52 flex justify-center items-center h-10 rounded-lg'>Settings</div>
</div>

{/* for mobile */}
<div className='mt-56 md:hidden block'>
<ProfileSidebar/>
</div>


{/* edit profile  */}
<div className='bg-white w-full h-fit rounded-xl px-6 py-8 flex flex-col mt-6 md:mt-0 mb-10 sm:gap-8 gap-4 shadow-md'> 
<div className='flex justify-between'>
<div>
    <label htmlFor="" className='text-slate-700  font-semibold '>First name</label>
    <p className='font-bold text-xl my-1'>John</p>
</div>

<div>
    <label htmlFor="" className='text-slate-700  font-semibold'>Last name</label>
    <p className='font-bold text-xl my-1'>Watson</p>
</div>

<div className=' h-9 rounded-md w-24 text-white'>
    <button className='bg-violet-700 w-24 h-9 rounded-md flex justify-around items-center p-2'>
        
        <HiPencil size={28}/>
        Edit</button>
</div>
</div>






<div className='flex justify-between flex-col gap-6 sm:flex-row '>
<div>
    <label htmlFor="" className='text-slate-700 my-1 font-semibold'>Phone</label>

<p className='font-bold text-xl my-1'>9876543210</p>
</div>

<div className=''>
    <label htmlFor="" className='text-slate-700  font-semibold'>Email address</label>
    <p className='text-lg font-bold my-1'>
    johnwatson@gmail.com
    </p>
</div>
<div className='-ml-5'>

</div>

</div>


<div>
    <label htmlFor="" className='text-slate-700  font-semibold' >Link</label>
    <p  className='text-violet-700 font-bold my-1'> 
    
    http/scdsjfsd.com
    </p>
</div>

<div>
    <label htmlFor="" className='text-slate-700  font-semibold'>About</label>
</div>
<div className=' tracking-wide font-semibold text-slate-700 text-lg lg:pr-36 -mt-3'>
    John watson is a seasoned and passionate UI/UX designer dedicated to creating intuitive and visually stunning digital experiences.
</div>

</div>


</div>
</div>

    </>
  )
}

export default Profile