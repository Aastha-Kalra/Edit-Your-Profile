import React from "react";
import Center1 from "./Center1.1";
import Center2 from "./Center1.2";

const Center = () => {
  const style = {
    top:'450px'
  }
  const myStyle = {
    top:'610px'
  }
  return (
    <>
      <div className="w-full h-full bg-white shadow-md px-4 py-4 rounded-md mt-4 flex flex-col gap-4">
<Center1/>
<Center2/>
<Center1  style={style} />
<Center2 style2={myStyle}/>

      </div>
    </>
  );
};

export default Center;
