import React from "react";

export const CurrentWeather = ({ input1,input2,icon,children }) => {

  return (
    <>
    {/* //flex-row flex-lg-column */}
      <div className="d-flex  justify-content-center col-12 col-md-4">
        {input1 && <div className=" me-2 me-lg-0 title header-font">{input1}</div>}
        {input2 && <div className=" header title-font">{input2}</div>}
        {icon &&<div className="align-items-center"> <img src={icon} alt="Internet connection is poor" /></div>}
        {children}
      </div>
    </>
  );
};
