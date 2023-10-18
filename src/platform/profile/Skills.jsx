import React from 'react'
import { HiPencil } from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
const Skills = () => {
  return (
 <>
 
 <div className=''>
 <div className='text-2xl font-bold text-violet-600 my-5 flex  justify-between items-center '>Skills
 
 
 
 <button className='bg-violet-700 w-28 h-10 lg:rounded-lg  rounded-xl flex justify-around text-white items-center font-normal p-2'>
        
        <HiPencil size={28}/>
        Edit</button>
 
 
 
 
 </div>
 </div>

 <div className=' mb-10 bg-white shadow-lg rounded-3xl  py-10 lg:px-2 px-2 lg:rounded-lg'>

<div className='grid grid-cols-3 w-full gap-y-5 lg:gap-2'>
    <button className='lg:w-44 h-10 rounded-l-3xl w-32 px-1 rounded-tr-2xl text-lg  lg:text-xl text-white bg-sky-600 flex gap-2 items-center lg:px-2'>
        <AiFillStar/>
        
        UI design</button>

        <button className='lg:w-52 lg:-ml-2 h-10 rounded-l-3xl w-32 rounded-tr-2xl text-white bg-sky-600 flex gap-2  text-md lg:text-xl items-center px-2'>
        <AiFillStar/>
        
        UI {
          (

        <>

        <p className='block lg:hidden'>
          design
        </p>
        <p className='hidden lg:block'>
          experience
        </p>
        </>
        )
        }
        
        
        </button>

        <button className='lg:w-48 h-10 rounded-l-3xl w-32 rounded-tr-2xl text-white bg-sky-600 flex gap-3 text-xl items-center px-4'>
        <AiFillStar/>
        
        {
          (

        <>
        <p className='lg:block hidden'>
          UI research
        </p>
        <p className='lg:hidden block'>
          Figma
        </p>
        </>
        )
        }
        
        
        
        </button>

  <div className='grid grid-cols-4 lg:gap-40 gap-32 grid-flow-row'>
  <button className='lg:w-36 w-24 h-10 rounded-l-3xl rounded-tr-2xl text-white bg-sky-600 flex lg:gap-3 text-xl items-center justify-center'>
        
        
        Figma</button>
        <button className='lg:w-36 w-24 h-10 rounded-l-3xl rounded-tr-2xl text-white bg-sky-600 flex gap-3 text-xl items-center justify-center'>
        
        
        Figma</button>
        <button className='lg:w-36 w-24 h-10 rounded-l-3xl rounded-tr-2xl text-white bg-sky-600 flex gap-3 text-xl items-center justify-center'>
        
        
        Figma</button>

        <button className='lg:w-36 w-24 h-10 rounded-l-3xl rounded-tr-2xl text-white bg-sky-600 xl:flex gap-3 text-xl items-center justify-center hidden'>
        
        
        Figma</button>
  </div>
</div>




    </div>
 </>
  )
}

export default Skills