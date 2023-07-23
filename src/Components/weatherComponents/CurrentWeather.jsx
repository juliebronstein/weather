import React from "react";

export const CurrentWeather = ({ input1,input2,icon,img,children }) => {

  return (
    <>
      <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-4">
        {input1 && <div className=" me-2 me-lg-0 title header-font">{input1}</div>}
        {input2 && <div className=" header title-font ">{input2}</div>}
        {icon &&<div className="align-items-center"> <img className='weather-img' src={icon} alt="Internet connection is poor" /></div>}
        {children && children}
      </div>
    </>
  );
};
