import React from 'react'

export const HourlyCart = ({title,value,icon,children,className}) => {

  return (
    <div className={`d-flex flex-column  hourly-cart col-3 col-md-3 col-lg-2 
    m-1 ${className}`}>
   <div className=" me-2 me-lg-0 title h-title">{title}</div>
   <div className="align-items-center"> <img className={`col-6 col-md-4`} src={icon} alt="Internet connection is poor" /></div>
   <div className="value">{value}</div>
   {children}
  </div>
  )
}
