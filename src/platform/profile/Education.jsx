import React, { useState } from 'react'
import { HiPencil } from 'react-icons/hi'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
const Education = () => {
  const [showDescription , setShowDescription] = useState(false);
  const handleDescription =()=>{
    setShowDescription(!showDescription)
  }
  return (
    <>
   
    <div className='text-2xl font-bold text-violet-600 my-4'>Education</div>

    <div className='  bg-white sm:shadow-md  shadow-2xl p-4 rounded-3xl sm:rounded-md flex flex-col gap-6 mt-4'>

    <div className='bg-purple-100 w-full flex justify-around  items-center rounded-2xl sm:rounded-md h-16'>
    <div className='px-3 sm:w-36 bg-violet-600 h-10 sm:rounded-md rounded-xl flex  justify-center items-center text-white font-semibold shadow-xl sm:shadow-lg text-xl'
    >Education</div>
    <div className='sm:w-44 h-10 sm:rounded-md flex p-3 px-2 rounded-xl justify-center items-center bg-white text-violet-600 font-semibold shadow-xl sm:shadow-md text-xl'>Add Education</div>
    <div className='rounded-full w-10 h-10 justify-center bg-white shadow-xl text-violet-600 items-center text-xl flex lg:hidden'>
<HiPencil/>
    </div>
    <div className='w-48 shadow-md h-10 rounded-md  justify-center hidden lg:flex items-center text-violet-600 bg-white font-semibold text-xl'>Edit Education</div>

</div>




<div className='bg-purple-100  w-full flex py-6 px-2 xl:px-6 flex-row items-center rounded-2xl sm:rounded-md gap-1'>

<div className=''>
<div className='w-5 h-5 rounded-full border-4 border-violet-600 '>

</div>
</div>


<div className='bg-white w-full xl:px-8 px-4 py-5 flex justify-between sm:rounded-md rounded-2xl'>
<div className='flex gap-8'>
  {
    showDescription?<div className='sm:w-[390px] sm:h-24 rounded-full'> 
    <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" alt="" className='rounded-full h-24 w-full '/>
        </div>:
        <div className='sm:w-24 sm:h-24 w-16 rounded-full'> 
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg" alt="" className='rounded-full w-full xl:h-24 h-20 '/>
            </div>
  }

    <div className='flex flex-col gap-2'>
        <div className='text-xl text-violet-600 font-bold'>Bsc computer application</div>
        <div className='text-slate-500'> Microsoft, Delhi</div>
        <div className='text-slate-500'>April 2019 - June 2023</div>


{
  showDescription?(<div className='bg-pink-500 w-full flex justify-center items-center'>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem mollitia eveniet error saepe, reprehenderit dicta vero excepturi distinctio accusantium doloribus adipisci doloremque quod repellat ipsam. Voluptates ipsum praesentium fuga?

  </div>):""
}

    </div>
</div>
<div className='text-violet-500 text-4xl font-bold hidden'>

{
  showDescription?<MdKeyboardArrowUp className='cursor-pointer' onClick={handleDescription}/>:<MdKeyboardArrowDown className='cursor-pointer'  onClick={handleDescription}/>
}

</div>
</div>
</div>



    </div>



</>


  )
}

export default Education