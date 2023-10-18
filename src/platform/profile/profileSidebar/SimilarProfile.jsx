import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const SimilarProfile = () => {
  return (
    <>
      <div className="text-violet-600 font-semibold flex justify-between  text-2xl">
        <span>Similar Profile</span>
        <span className="text-lg font-normal flex justify-center items-center gap-1">see all 
        
        <MdKeyboardDoubleArrowRight className="mt-1"/>
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex  justify-between items-center w-full bg-violet-600 rounded-xl h-28 p-4">
          <div className="flex gap-6">
            <span>
              <img
                src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg"
                alt=""
                className="rounded-full w-20 h-20 border-2"
              />
            </span>
            <span className="font-bold text-white text-xl tracking-wide">
              Abhijith
              <p className="font-light text-sm my-1 text-white/80">UI/UX designer</p>
            </span>
          </div>
          <div className="text-white text-xl">
            <MdKeyboardArrowRight size={40} />
          </div>
        </div>


        <div className="flex  justify-between items-center w-full bg-white shadow-md rounded-xl h-28 p-4">
          <div className="flex gap-6">
            <span>
              <img
                src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg"
                alt=""
                className="rounded-full w-20 h-20 border-2"
              />
            </span>
            <span className="font-bold text-black text-xl tracking-wide">
              Abhijith
              <p className="font-light text-sm my-1 text-black/80">UI/UX designer</p>
            </span>
          </div>
          <div className="text-violet-600 text-xl">
            <MdKeyboardArrowRight size={40} />
          </div>
        </div>



        <div className="flex  justify-between items-center w-full bg-violet-600 rounded-xl h-28 p-4">
          <div className="flex gap-6">
            <span>
              <img
                src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg"
                alt=""
                className="rounded-full w-20 h-20 border-2"
              />
            </span>
            <span className="font-bold text-white text-xl tracking-wide">
              Abhijith
              <p className="font-light text-sm my-1 text-white/80">UI/UX designer</p>
            </span>
          </div>
          <div className="text-white text-xl">
            <MdKeyboardArrowRight size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarProfile;
