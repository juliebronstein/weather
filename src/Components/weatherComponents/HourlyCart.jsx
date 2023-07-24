import React from 'react'

export const HourlyCart = ({input1,input2,icon,children,className}) => {
  return (
    <div className={`d-flex flex-column justify-content-center hourly-cart col-md-6 col-lg-4 `}>
   <div className=" me-2 me-lg-0 title ">{input1}</div>
   <div className="align-items-center"> <img className='weather-img' src={icon} alt="Internet connection is poor" /></div>
   <div className=" ">{input2}</div>
   {children}
  </div>
  )
}
