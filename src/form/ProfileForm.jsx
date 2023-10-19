import React from "react";
import "./pro.css";
import Profile from "./Profile";
const ProfileForm = () => {
  return (
    <>
      <div className="w-full h-[100vh]  bg-purple-100 flex ">
        <div className="overflow-y-auto overflow-x-hidden mic w-full">
          <div className="bg-indigo-950  text-white/80 flex flex-col">
            <div className="text-sky-600 font-bold py-3 px-4 text-2xl">Edit Profile</div>

            <div>
              <Profile />
            </div>

            <div className="font-bold px-7 text-white text-2xl">Basic info</div>
            <hr className="my-3 border-1 w-[1210px] ml-8" />
            <div className="">
              <form action="" className="mb-4 px-8 mt-4">
                <div className="flex flex-row justify-between gap-8">
                  <div className="flex flex-col mb-4 w-full">
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      id=""
                      className="bg-[#313161] pl-2 h-10 mt-1  focus:outline-none rounded-md"
                    />
                  </div>

                  <div className="flex flex-col w-full ">
                    <label>Last name</label>
                    <input
                      type="text"
                      name="firstName"
                      id=""
                      className="bg-[#313161]  mt-1 pl-2 focus:outline-none  h-10 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-between gap-8">
                  <div className="flex flex-col mb-4  w-full">
                    <label>User name</label>
                    <input
                      type="text"
                      name="firstName"
                      id=""
                      className="bg-[#313161]  h-10 mt-1 pl-2 focus:outline-none rounded-md"
                    />
                  </div>

                  <div className="flex flex-col w-full ">
                    <label>Location</label>
                    <input
                      type="text"
                      name="firstName"
                      id=""
                      className="bg-[#313161]  mt-1 pl-2 focus:outline-none  h-10 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label >Title</label>
                  <input
                    type="text"
                    className="w-full focus:outline-none pl-2 mt-2 h-10 bg-[#313161]  rounded-md"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="" className="font-bold text-white text-2xl">About me</label>
                  <hr className="mt-4 text-white/40" />
                </div>
                <div className="mt-4 flex flex-col">
                  <label htmlFor="">Biography</label>
                  <textarea
                    type="text"
                    className="h-28 focus:outline-none pl-2 bg-[#313161]  mt-2 rounded-md"
                  />
                </div>
                <div className="mt-4 flex flex-col">
                  <label htmlFor="" className="text-white font-bold text-2xl">External Links</label>
                  <hr className="text-white/40 mt-2" />
                </div>

                <div className="mt-4 flex flex-col">
                  <label htmlFor="">Facebook url:</label>
                  <input
                    type="text"
                    className="h-10 focus:outline-none pl-2 bg-[#313161]  mt-2 rounded-md "
                  />
                </div>

                <div className="mt-4 flex flex-col">
                  <label htmlFor="">Twitter url:</label>
                  <input
                    type="text"
                    className="h-10 focus:outline-none pl-2 bg-[#313161]  mt-2 rounded-md "
                  />
                </div>

                <div className="mt-4 flex flex-col">
                  <label htmlFor="">Linkedin url:</label>
                  <input
                    type="text"
                    className="h-10 focus:outline-none pl-2 bg-[#313161]  mt-2 rounded-md "
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-end items-center mb-4 px-16">
              <button className="w-24 h-10 bg-indigo-600 rounded-md">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
