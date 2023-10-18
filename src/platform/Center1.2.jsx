import React from 'react'
import {AiOutlineEye} from 'react-icons/ai'

const Center2 = ({style2}) => {
  return (
   <>
   
   
   <div className="w-full h-fit shadow-xl bg-white py-2 rounded-xl">
          <div style={style2} className={`border-l-4 border-l-violet-500 h-16 absolute top-72 rounded-full`}></div>
          <div style={style2} className="border-r-4 border-r-violet-500 h-16 absolute top-72 rounded-full right-28"></div>

          <div className="w-full  h-full px-10 flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex gap-5">
                <div className="w-20 h-20 bg-white shadow-md rounded-lg"></div>

                <div className="text-black/60 text-xl font-semibold">
                  <p>Digital Ocean</p>
                  <p className="font-semibold text-black text-2xl ">
                    Sr. Back-End-Developer
                  </p>
                  <p className="text-sm">Bokara , Jharkhand</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 text-white/80">
                <span className="bg-violet-300 p-0.5 w-20 flex justify-center items-center rounded-md">
                  C++
                </span>
                <span className="bg-violet-300 flex justify-center items-center rounded-md w-20">
                  Open SG
                </span>
                <span className="bg-violet-300 flex justify-center items-center rounded-md w-20">
                  OPS3
                </span>
              </div>
            </div>

            <div className="flex flex-col h-full justify-between gap-20 text-black/50">
              <div className="flex flex-row gap-10">
             
                <p className='flex items-center gap-1'>
                <AiOutlineEye/>
                  540</p>
                <p>25 applicants</p>
              </div>
              <div className="flex  justify-end">4 weeks ago</div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Center2