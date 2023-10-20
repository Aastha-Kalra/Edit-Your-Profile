import React, { useState } from "react";

const Profile = () => {
  const defaultImage =
    "https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg";
  const defaultCover =
    "https://thumbs.dreamstime.com/b/childhood-memories-15935918.jpg";
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [selectedCover, setSelectedCover] = useState(defaultCover);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e) => {
    const file1 = e.target.files[0];
    if (file1) {
      setSelectedCover(URL.createObjectURL(file1));
    }
  };
  return (
    <>
      {selectedCover && (
        <div className=" bg-purple-300 w-full text-white">
          <img src={selectedCover} alt="" className="w-full h-48" />
        </div>
      )}

      <div className="">
        <div className=" -mt-16 flex  justify-center items-center relative">
          <div className=" w-32 flex flex-col justify-center items-center ">
            {selectedImage && (
              <div className="w-24 h-24 border-4 border-sky-500 rounded-md   ">
                <img src={selectedImage} alt="" className="h-full w-full" />
              </div>
            )}

            <div className="h-10">
              <input
                className="hidden"
                type="file"
                id="image-upload"
                accept="image"
                onChange={handleImageChange}
              />

              <label
                htmlFor="image-upload"
                className="text-sm  flex flex-col justify-center"
              >
                <span className="bg-indigo-600 w-24  rounded-md mt-2 flex justify-center items-center h-9  font-semibold text-white">
                  Edit avatar
                </span>
              </label>
            </div>
          </div>

          <div className="-mt-44  absolute right-5">
            <input
              className="hidden"
              type="file"
              id="coverImage-upload"
              accept="image"
              onChange={handleCoverChange}
            />
            <label
              htmlFor="coverImage-upload"
              className="text-sm  flex flex-col justify-center"
            >
              <span className="bg-indigo-950 w-32 rounded-md mt-24 font-semibold h-8 flex justify-center items-center text-white">
                Edit Cover
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
