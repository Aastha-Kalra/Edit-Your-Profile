import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./resume.css";
const ResumePop = ({ closeResumePop, selectedResume }) => {
  return (
    <div className="w-full h-full fixed top-0 sm:left-0 -left-2 bottom-0 right-0 bg-black/60 rounded-md flex justify-center items-center ">
      <div className="bg-violet-600 sm:w-2/3 xl:w-2/3 w-96 h-fit rounded-md text-sm flex flex-col gap-2 text-white px-4 py-2">
        <div className="text-white font-bold flex justify-center items-center text-xl">
          Resume
        </div>
        <div className="w-full bg-white h-[500px]  p-6 rounded-xl">
          <div className="h-96">
            <embed
              src={selectedResume}
              type="application/pdf"
              width="100%"
              height="450px"
            />
          </div>
        </div>

        <button
          onClick={closeResumePop}
          className="absolute right-6 top-12 text-white rounded-full flex justify-center bg-black/40 p-3 w-12 h-12 items-center"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default ResumePop;
