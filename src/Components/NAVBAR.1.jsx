import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const NAVBAR = ({ filter }) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  function active() {
    return setActive1(true), setActive2(false), setActive3(false);
  }

  function activeTwo() {
    return setActive1(false), setActive2(true), setActive3(false);
  }
  function activeThree() {
    return setActive1(false), setActive2(false), setActive3(true);
  }

  return (
    <>
      <div className="bg-[#5453A4]  lg:h-full absolute lg:relative lg:rounded-2xl md:w-full 2xl:h-[300%] xl:h-[100%] lg:w-44 xl:w-36 w-[345px] h-[110px]  left-2 lg:left-0 top-[104px] lg:top-0">
        <div className="flex lg:flex-col flex-row justify-around lg:gap-16 2xl:gap-12 xl:gap-8 lg:p-8 items-center gap-0">
          <div className=" bg-indigo-900  lg:w-14 lg:h-14 w-10 h-10 md:w-16 md:h-16 rounded-full md:text-2xl text-xl lg:text-2xl flex justify-center items-center lg:relative fixed top-[-2px]  left-4 lg:left-0 cursor-pointer">
            <AiOutlineArrowLeft />
          </div>

          <div className="">
            <div
              className={`mb-8 lg:mb-0 w-36  flex justify-center items-center rounded-2xl drop-shadow-2xl ${
                active2 === true ? "md:bg-sky-500" : ""
              } `}
              onClick={() => {
                activeTwo();
              }}
            >
              <button
                className="flex flex-col  lg:w-44 lg:h-36 lg:p-4  w-14 md:h-24 h-14   rounded-xl items-center"
                onClick={() => filter("Robot")}
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20190622/ourmid/pngtree-3d-render-of-blue-robot-character-png-image_1508576.jpg"
                  alt=""
                  className="rounded-full  w-16 h-16"
                />
                <span className="lg:mt-3 block">Robot</span>
              </button>
            </div>
          </div>
          <div className="">
            <div
              className={`icon rounded-2xl w-36  flex justify-center items-center  ${
                active1 === true ? "md:bg-sky-500" : ""
              } `}
              onClick={() => {
                active();
              }}
            >
              <button
                className="flex flex-col lg:w-44 lg:h-36  w-14 h-14 md:h-24 lg:p-4 rounded-xl  items-center bg-sky-0"
                onClick={() => filter("Cartoons")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQem_eGMGNbTQh1gmY9BhoZvdWoeXe3oeX1fg&usqp=CAU"
                  alt=""
                  className="rounded-full  mix-blend  bg-purple-500 w-16 h-16 "
                />
                <span className="mt-3 hidden lg:block">Cartoons</span>
              </button>
            </div>
          </div>

          <div className="">
            <div
              className={`mb-8 w-36 md:rounded-2xl rounded-full flex justify-center items-center  ${
                active3 === true ? "md:bg-sky-500" : ""
              } `}
              onClick={() => {
                activeThree();
              }}
            >
              <button
                className="flex flex-col lg:w-44 lg:h-36 h-14 w-14 md:h-24 lg:p-4  rounded-xl  items-center"
                onClick={() => filter("Human")}
              >
                <img
                  src="https://img.freepik.com/premium-vector/cartoon-avatar-aesthetic-illustration_569774-79.jpg?w=2000"
                  alt=""
                  className="rounded-full w-16 h-16"
                />
                <span className="lg:mt-3 block">Human</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
