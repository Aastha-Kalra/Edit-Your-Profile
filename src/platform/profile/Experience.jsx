import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiPencil } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Experience = () => {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const handleDescription1 = () => {
    setShowDescription1(!showDescription1);
  };
  const handleDescription2 = () => {
    setShowDescription2(!showDescription2);
  };
  const handleDescription3 = () => {
    setShowDescription3(!showDescription3);
  };

  return (
    <>
      <div className="text-2xl font-bold text-violet-600">Experience</div>
      <div className=" bg-white shadow-md p-3 rounded-3xl sm:rounded-md flex flex-col gap-6 mt-4">
        <div className="bg-purple-100 w-full flex  justify-around  items-center sm:rounded-xl h-16 rounded-3xl">
          <div className="sm:w-36 bg-violet-600 h-10 sm:rounded-md flex px-3 justify-center items-center text-white shadow-xl font-semibold rounded-xl  sm:shadow-md text-xl">
            Experience
          </div>
          <div className="sm:w-44 h-10 sm:rounded-md px-1 flex justify-center items-center bg-white text-violet-600 font-semibold rounded-xl shadow-xl sm:shadow-md text-xl">
            Add experience 
          </div>

          <div className='rounded-full w-10 h-10 justify-center bg-white shadow-xl text-violet-600 items-center text-xl flex lg:hidden'>
<HiPencil/>
    </div>

          <div className="w-48 shadow-md h-10 rounded-md lg:flex justify-center items-center text-violet-600 bg-white font-semibold text-xl hidden">
            Edit experience
          </div>
        </div>

        <div className=" bg-purple-100  w-full flex py-6 px-8 flex-row items-center rounded-3xl sm:rounded-md gap-4">
          <div className="">
            <div className="w-5 h-5 border-4 border-violet-600 rounded-full "></div>
            {
                showDescription1?   <div className="border-l-2 border-violet-600 h-64 ml-2 "></div>:
                <div className="border-l-2 border-violet-600 sm:h-48 h-24 ml-2 "></div>
            }
            
            <div className="w-5 h-5 border-4 border-violet-600 rounded-full "></div>
           {
            showDescription2 ? <div className="border-l-2 border-violet-600  h-64 ml-2"></div>:
            <div className="border-l-2 border-violet-600 h-24 sm:h-48 ml-2"></div>

           }
            <div className="w-5 h-5 border-4 border-violet-600 rounded-full "></div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="bg-white w-full px-3 sm:px-8 sm:py-5 py-2 flex justify-between sm:rounded-md rounded-3xl">
              <div className="flex gap-5">
                <div className="">
                  <FcGoogle size={60} />
                </div>
                <div className="flex flex-col sm:gap-2 w-full">
                  <div className="sm:text-xl text-violet-600 font-bold">
                    User Interface designer
                  </div>
                  <div className="text-slate-500 md:w-44"> Microsoft, Delhi</div>
                  <div className="text-slate-500">April 2019 - June 2023</div>
                  {showDescription1 ? (
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Blanditiis rerum dolorem sapiente ut deserunt velit,
                      beatae esse ipsa consequuntur accusamus iure quae! Velit
                      veniam, iste officiis doloremque error praesentium eos!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="text-violet-500 text-4xl font-bold hidden h-8 sm:flex">
                {showDescription1 ? (
                  <MdKeyboardArrowUp
                    className="cursor-pointer"
                    onClick={handleDescription1}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="cursor-pointer"
                    onClick={handleDescription1}
                  />
                )}
              </div>
            </div>

            <div className="bg-white w-full p-3 sm:p-8 flex justify-between rounded-3xl sm:rounded-md shadow-md">
              <div className="flex gap-5">
                <div className="">
                  <FcGoogle size={60} />
                </div>
                <div className="flex flex-col w-full sm:gap-2">
                  <div className="sm:text-xl text-violet-600 font-bold">
                    User Interface designer
                  </div>
                  <div className="text-slate-500 md:w-44"> Microsoft, Delhi</div>
                  <div className="text-slate-500">April 2019 - June 2023</div>

                  {showDescription2 ? (
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Blanditiis rerum dolorem sapiente ut deserunt velit,
                      beatae esse ipsa consequuntur accusamus iure quae! Velit
                      veniam, iste officiis doloremque error praesentium eos!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="text-violet-500 text-4xl font-bold hidden h-8 sm:block">
                {showDescription2 ? (
                  <MdKeyboardArrowUp
                    className="cursor-pointer"
                    onClick={handleDescription2}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="cursor-pointer"
                    onClick={handleDescription2}
                  />
                )}
              </div>
            </div>
            <div className="bg-white w-full p-3 sm:p-8 flex justify-between sm:rounded-md rounded-3xl">
              <div className="flex gap-5 ">
                <div>
                  <FcGoogle  size={60}/>
                </div>
                <div className="flex flex-col sm:gap-2">
                  <div className="sm:text-xl text-violet-600 font-bold">
                    User Interface designer
                  </div>
                  <div className="text-slate-500 md:w-44"> Microsoft, Delhi</div>
                  <div className="text-slate-500">April 2019 - June 2023</div>
                  {showDescription3 ? (
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Blanditiis rerum dolorem sapiente ut deserunt velit,
                      beatae esse ipsa consequuntur accusamus iure quae! Velit
                      veniam, iste officiis doloremque error praesentium eos!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="text-violet-500 text-4xl font-bold hidden sm:block">
                {showDescription3 ? (
                  <MdKeyboardArrowUp
                    className="cursor-pointer"
                    onClick={handleDescription3}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="cursor-pointer"
                    onClick={handleDescription3}
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

export default Experience;
