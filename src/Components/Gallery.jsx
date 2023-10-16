import React, { useState } from "react";
import Data from "./Data";
import NAVBAR from "./NAVBAR";
import "./Mickey.css";

const Gallery = () => {
  const [images, setImages] = useState(Data);
  const [category , setCategory ] = useState()
  const filter = (categoriesItem) => {
    console.log(categoriesItem)
    const updatedItem = Data.filter((curItem) => {
      return curItem.Category === categoriesItem;
    });
    setImages(updatedItem);
    setCategory(categoriesItem)
  };

  const [slideNumber, setSlideNumber] = useState(0);
  // console.log(Data[1]);
  const [openModal, setOpenModal] = useState(true);

  const handleImage = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  return (
    <>
      <div className="bg-indigo-950 h-[100vh] w-screen lg:px-4 md:p-8 xl:p-8 flex md:flex-row columns-3 overflow-hidden flex-col gap-3  text-white main ">
        <div className="flex flex-col bg-indigo-950 md:w-[700px] lg:w-44 w-[374px] xl:h-[100%] 2xl:h-full lg:h-full absolute top-[665px] lg:top-0 lg:relative">
          <NAVBAR filter={filter}/>
        </div>
        <div className="flex absolute md:relative md:top-0 top-[263px]">
          <div className="overflow-y-hidden overflow-x-hidden mic">
            <div className="bg-[#5453A4] lg:w-[440px] px-4 md:px-1 xl:px-4 md:py-4 lg:h-full py-2 xl:w-[600px] xl:h-[100%] w-[343px] md:h-[640px] h-[325px] 2xl:h-full lg:top-0 absolute top-[154px] left-3 md:left-0 md:top-10 md:relative rounded-2xl md:w-[400px] flex md:flex-ro flex-col overflow-y-auto  overflow-x-hidden mic gap-6">
            <div className="text-xl md:ml-3 ml-0 md:text-3xl">{category}</div>
            
              <div className="grid grid-cols-3 w-72 h-24 md:w-[400px] md:gap-1 md:grid-cols-2 lg:w-[400px] xl:w-[550px]   xl:grid-cols-3 xl:gap-y-8 xl:gap-x-5 lg:gap-y-6 gap-6 ">
          
                {images.map((elem, index) => {

                  return (
                    <div key={index}>

                  
                      <div
                        className="bg-yellow-400/100 h-[98px] md:h-52 w-[80px] md:w-44 cursor-pointer   rounded-xl"
                        onClick={() => handleImage(index)}
                      >
                        <div className="pl-4 flex justify-end h-6 ">
                          {elem.star ? (
                            <img
                              src={elem.star}
                              className="md:w-10 w-6 md:h-9 h-6 mix-blend-multiply "
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        {/* {console.log(elem.id)} */}
                        {elem.img ? (
                        <div className=" -mb-3">
                            <img
                            src={elem.img}
                            alt=""
                            className="md:h-36 h-[62px]  justify-cente mix-blend-multiply items-center  "
                          />
                        </div>
                        ) : (
                          ""
                        )}

                        <svg
                          className="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 16 980 320"
                        >
                          <path
                            fill="#273c75"
                            fill-opacity="1"
                            d="M0,160L18.5,186.7C36.9,213,74,267,111,245.3C147.7,224,185,128,222,122.7C258.5,117,295,203,332,240C369.2,277,406,267,443,234.7C480,203,517,149,554,122.7C590.8,96,628,96,665,80C701.5,64,738,32,775,16C812.3,0,849,0,886,42.7C923.1,85,960,171,997,176C1033.8,181,1071,107,1108,85.3C1144.6,64,1182,96,1218,117.3C1255.4,139,1292,149,1329,165.3C1366.2,181,1403,203,1422,213.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex justify-center items-center md:mt-2 mt-1 md:text-xl text-[10px] ">
                        {elem.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="bg-[#5453A4] 2xl:h-full lg:h-full rounded-2xl absolute w-[342px] top-[73px] md:top-10 lg:top-0 xl:h-full h-[320px] md:h-[640px] end md:left-0 md:relative flex justify-center flex-col lg:w-[950px] items-center md:w-[750px]">
          <div className="bg-indigo-950 2xl:w-[600px] lg:w-[320px] lg:h-[440px] rounded-2xl md:w-[250px] md:top-14 xl:top-16 top-2 2xl:top-10 lg:top-20 2xl:px-24 xl:w-[400px] xl:h-[450px] 2xl:h-[500px] 2xl:py-10 absolute w-[320px] h-[260px] md:h-[360px]">
            {openModal && (
              <div className="p-4 md:h-full ">
                <div className="md:w-[210px] 2xl:w-[360px] md:h-[255px] absolute w-[290px] lg:h-[340px] h-[200px] rounded-2xl flex flex-col items-end lg:w-[280px] xl:w-[360px] xl:h-[357.4px] bg-yellow-400">
                  <div className="flex flex-row ">
                    <img
                      src={images[slideNumber].img}
                      className="md:p-3 md:w-32 md:h-[210px] h-48 p-4 lg:h-[279px] lg:w-80 xl:w-44 xl:h-[280px] mix-blend-multiply absolute md:relative right-28 lg:right-10 xl:right-44 md:right-8 bottom-15 md:bottom-0"
                      alt=""
                    />
                    {images[slideNumber].star ? (
                     <div className=" md:h-32 h-12 w-12 md:w-36 absolute md:right-1 md:relative lg:absolute lg:-right-12 xl:right-0 right-9 top-3">
                       <img
                        className="md:w-28 md:h-32 w-14 h-14 mix-blend-multiply absolute xl:right-0"
                        src={images[slideNumber].star}
                        alt=""
                      />
                     </div>
                    ) : (
                      <img
                        src=""
                        className="w-32  bg-pink-50 h-32 mix-blend-multiply hidden"
                      />
                    )}
                  </div>
                  <svg
                    className="svg absolute top-[140px] md:relative md:top-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 309"
                  >
                    <path
                      fill="#273c75"
                      fill-opacity="1"
                      d="M0,160L18.5,186.7C36.9,213,74,267,111,245.3C147.7,224,185,128,222,122.7C258.5,117,295,203,332,240C369.2,277,406,267,443,234.7C480,203,517,149,554,122.7C590.8,96,628,96,665,80C701.5,64,738,32,775,16C812.3,0,849,0,886,42.7C923.1,85,960,171,997,176C1033.8,181,1071,107,1108,85.3C1144.6,64,1182,96,1218,117.3C1255.4,139,1292,149,1329,165.3C1366.2,181,1403,203,1422,213.3L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
                    ></path>
                  </svg>
                </div>

                <div className="flex justify-center items-center md:text-2xl text-xl font-semibold py-10 absolute md:pb-12 -bottom-7 xl:-bottom-5 left-[95px] md:left-[30px] xl:left-32 2xl:left-52 lg:left-16 lg:-bottom-4">
                  Mickey Mouse
                </div>
              </div>
            )}
          </div>
          <br />
          <div className=" w-10/12 items-end flex justify-end">
            <button className="bg-indigo-700 rounded-xl md:w-52 w-44 h-10 md:h-14 text-xl absolute md:bottom-28 bottom-2  md:right-7 xl:bottom-10 right-20 2xl:right-12">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
