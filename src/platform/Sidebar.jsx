import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { PiShoppingBagOpenLight } from "react-icons/pi";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-4 cursor-pointer">
        <div className="flex justify-center items-center w-64 h-44 bg-white shadow-md rounded-lg flex-col text-lg mt-3 ">
          <div className="rounded-full w-16 h-16 flex justify-center items-center">
            <img
              src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg"
              className="w-18 rounded-full h-18"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-1 gap-1">
            <p className="text-black font-bold tracking-wider text-xl">
              John Watson
          
            </p>
            <p className="font-semibold -mt-1 text-black/60">@johnwat</p>
            <p className="text-blue-500 text-sm flex justify-center items-center ">
              <span>
                <IoLocationOutline />
              </span>
              India , kerela
            </p>
          </div>
        </div>
        {/* sidebar */}
        <div className="w-64 h-fit bg-white shadow-md mb-5 rounded-xl">
          <ul className="flex flex-col gap-2 mb-2 text-black/80">
            <li className="flex px-10 gap-6 w-full h-12 bg-violet-400 rounded-t-xl text-violet-900  items-center  border-l-8 border-violet-900">
              <span className="text-2xl">
                <AiOutlineHome />
              </span>
              Home
            </li>

            <li className="flex px-10 w-full h-10 rounded-t-xl   items-center gap-6">
              <span className="text-xl">
                <MdOutlineExplore />
              </span>
              Explore
            </li>

            <li className="flex px-10 w-full h-10  rounded-t-xl   items-center gap-6">
              <span className="text-xl">
                <IoMdNotificationsOutline />
              </span>
              Notifications
            </li>

            <li className="flex px-10 w-full h-10 rounded-t-xl  items-center gap-6">
              <span className="text-xl">
                <PiShoppingBagOpenLight />
              </span>
              Company
            </li>

            <li className="flex px-10 w-full h-10 rounded-t-xl items-center gap-6">
              <span className="text-xl">
                <AiOutlineUserAdd />
              </span>
              New job
            </li>
            <li className="flex px-10 w-full h-10 rounded-t-xl items-center gap-6">
              <span className="text-xl">
                <MdPayment />
              </span>
              Payment
            </li>
            <li className="flex px-10 w-full h-10 rounded-t-xl items-center gap-6">
              <span className="text-xl">
                <AiOutlineSetting />
              </span>
              Settings
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
