import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const JobSuggestion = () => {
  return (
    <>
      <div className="font-semibold text-2xl text-violet-600 flex justify-between">
        JobSuggestion
        <span className="font-light text-lg flex justify-center items-center gap-1">see all
        
        <MdKeyboardDoubleArrowRight  className=""/>
        
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" text-white/80 bg-violet-600 rounded-lg  p-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span>
                <FcGoogle size={60} />
              </span>
              <span>
                <p>Microsoft</p>
                <p className="font-semibold xl:text-2xl text-lg">Sr. UI/UX designer</p>
                <p>Maharashtra , India</p>
              </span>
            </div>
            <div className="flex justify-between">
            <div className="flex gap-2">
              <span className="w-16 h-6 rounded-md bg-violet-400 flex justify-center items-center text-black/70 font-semibold">
                Figma
              </span>

              <span className="w-16 h-6 rounded-md bg-violet-400 flex justify-center items-center text-black/70 font-semibold">
                ui/ux
              </span>
              <span className="w-16 h-6 rounded-md bg-violet-400 xl:flex justify-center items-center text-black/70 font-semibold hidden">
                Figma
              </span>
            </div>
            <div className="flex  justify-end">
        
        1 day ago
      </div>
            </div>
          </div>
     
        </div>





        <div className="text-slate-400 bg-white shadow-md rounded-lg p-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span>
                <FcGoogle size={60} />
              </span>
              <span>
                <p>Microsoft</p>
                <p className="font-semibold text-black xl:text-2xl text-lg">Sr. UI/UX designer</p>
                <p>Maharashtra , India</p>
              </span>
            </div>
            <div className="flex justify-between">
            <div className="flex gap-2">
              <span className="w-16 h-6 rounded-md bg-gray-400 flex justify-center items-center text-black/70 font-semibold">
                Figma
              </span>

              <span className="w-16 h-6 rounded-md bg-gray-400 flex justify-center items-center text-black/70 font-semibold">
                ui/ux
              </span>
              <span className="w-16 h-6 rounded-md bg-gray-400 xl:flex justify-center items-center text-black/70 font-semibold hidden">
                Figma
              </span>
            </div>
            <div className="flex  justify-end">
        
        1 day ago
      </div>
            </div>
          </div>
        
        </div>





        <div className=" text-white/80 bg-violet-600 rounded-lg p-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span>
                <FcGoogle size={60} />
              </span>
              <span>
                <p>Microsoft</p>
                <p className="font-semibold xl:text-2xl text-lg">Sr. UI/UX designer</p>
                <p>Maharashtra , India</p>
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2" >

           
              <span className="w-16 h-6 rounded-md bg-violet-400 flex justify-center items-center text-black/70 font-semibold">
                Figma
              </span>

              <span className="w-16 h-6 rounded-md bg-violet-400 flex justify-center items-center text-black/70 font-semibold">
                ui/ux
              </span>
              <span className="w-16 h-6 rounded-md bg-violet-400 xl:flex justify-center items-center text-black/70 font-semibold hidden">
                Figma
              </span>
              </div>
              <div className="flex  justify-end">
        
        1 day ago
      </div>
            </div>
            
          </div>
          
        </div>




        <div className=" text-slate-500 bg-white shadow-md rounded-lg xl:px-6 px-4 py-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 lg:w-64 xl:w-72">
              <span>
                <FcGoogle size={60} />
              </span>
              <span>
                <p>Microsoft</p>
                <p className="font-semibold text-black xl:text-2xl text-lg ">Sr. UI/UX designer</p>
                <p>Maharashtra , India</p>
              </span>
            </div>
            <div className="flex  justify-between">
             <div className="flex gap-2">



             <span className="w-16 h-6 rounded-md bg-gray-400 flex justify-center items-center text-black/70 font-semibold">
                Figma
              </span>

              <span className="w-16 h-6 rounded-md bg-gray-400 flex justify-center items-center text-black/70 font-semibold">
                ui/ux
              </span>
              <span className="w-16 h-6 rounded-md bg-gray-400 xl:flex justify-center items-center text-black/70 font-semibold hidden">
                Figma
              </span>



             </div>

              <div className="flex  justify-end">
        
            1 day ago
          </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default JobSuggestion;
