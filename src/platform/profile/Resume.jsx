import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./resume.css";
import ResumePop from "./ResumePop";

const Resume = () => {
  const [openResume, setOpenResume] = useState(false);
  const [selectedResume, setSelectedResume] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedResume(URL.createObjectURL(file));
    }
  };

  const closeResumePop = () => {
    setOpenResume(false);
  };
  return (
    <>
      <div className="text-violet-600 text-2xl font-bold">Resume</div>

      <div className="px-4 sm:px-10 py-4  bg-white shadow-md rounded-xl mt-4 mb-14 gap-2 flex flex-row justify-between">
        <div className="flex flex-col w-full">
          <div
            className="w-full border-dashed border-slate-500 h-80 p-2 rounded-xl border-4 flex justify-center items-center"
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              className="input-field"
              type="file"
              accept=".pdf"
              onChange={handleImageChange}
              hidden
            />
            {selectedResume ? (
              <div className="w-full h-full ">
                <embed src={selectedResume} className="w-full h-full" />
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col text-2xl lg:text-3xl">
                <p>Uplaod your resume here</p>
                <AiOutlineCloudUpload size={90} />
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mt-3">
            <div className="flex items-center justify-around gap-10">
              <div className="text-violet-600 text-2xl font-bold">
                <RiDeleteBin6Line
                  className="cursor-pointer"
                  onClick={() => setSelectedResume(null)}
                />
              </div>
              <div>
                <button className="w-56 text-white font-bold tracking-wide text-xl  h-12 bg-violet-600 rounded-md flex justify-center items-center shadow-xl">
                  Update Resume
                </button>
              </div>
              <div className="text-violet-600 font-bold text-3xl cursor-pointer">
                <AiOutlineFullscreen onClick={() => setOpenResume(true)} />
                {openResume && selectedResume && (
                  <ResumePop
                    selectedResume={selectedResume}
                    closeResumePop={closeResumePop}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
