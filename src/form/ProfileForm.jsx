import React from "react";
import "./pro.css";
import Profile from "./Profile";
import { useFormik } from "formik";
import ProfileSchema from "../schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  confirm_password: "",
};

const ProfileForm = () => {
  const { values, errors, handleSubmit, touched, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: ProfileSchema,
      onSubmit: (values, action) => {
        console.warn(values);
        action.resetForm();
        alert("Do you want to submit it?");
      },
    });

  // console.log(errors)
  return (
    <>
      <div className="w-full h-[100vh]  bg-purple-100 flex ">
        <div className="overflow-y-auto overflow-x-hidden mic w-full">
          <div className="bg-indigo-950  text-white/80 flex flex-col">
            <div className="text-sky-600 font-bold py-3 px-4 text-2xl">
              Edit Profile
            </div>
            <div>
              <Profile />
            </div>

            <div className="font-bold px-7 text-white text-2xl">Basic info</div>
            <hr className="my-3 border-1 w-[1210px] ml-8" />
            <div className="">
              <form className="mb-4 px-8 mt-4" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between gap-8">
                  <div className="flex flex-col mb-4 w-full">
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      id=""
                      className="bg-[#313161] pl-2 h-10 mt-1  focus:outline-none rounded-md"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName ? (
                      <p className="text-red-500">{errors.firstName}</p>
                    ) : null}
                  </div>

                  <div className="flex flex-col w-full ">
                    <label>Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      id=""
                      className="bg-[#313161]  mt-1 pl-2 focus:outline-none  h-10 rounded-md"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName ? (
                      <p className="text-red-500">{errors.lastName}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-row justify-between gap-8">
                  <div className="flex flex-col mb-4  w-full">
                    <label>User name</label>
                    <input
                      type="text"
                      name="userName"
                      id=""
                      className="bg-[#313161]  h-10 mt-1 pl-2 focus:outline-none rounded-md"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.userName && touched.userName ? (
                      <p className="text-red-500">{errors.userName}</p>
                    ) : null}
                  </div>

                  <div className="flex flex-col w-full ">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id=""
                      className="bg-[#313161]  mt-1 pl-2 focus:outline-none  h-10 rounded-md"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-red-500">{errors.password}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    className="w-full focus:outline-none pl-2 mt-2 h-10 bg-[#313161]  rounded-md"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="text-red-500">{errors.confirm_password}</p>
                  ) : null}
                </div>

                {/* <div className="mt-4">
                  <label htmlFor="" className="font-bold text-white text-2xl">
                    About me
                  </label>
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
                  <label htmlFor="" className="text-white font-bold text-2xl">
                    External Links
                  </label>
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
                </div> */}

                <div className="flex justify-end items-center mt-6 px-16 ">
                  <button
                    type="submit"
                    className="w-24 h-10 bg-indigo-600 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
