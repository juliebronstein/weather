import React from 'react'
import { ariConditionIcons } from './icons'

export const AriCondition = ({title,value}) => {
  return (
    <div className="d-flex flex-row flex-lg-column  justify-content-center col-md-6 col-lg-3 align-items-center justify-content-center">
    <div className="me-2 me-lg-0 header ">
      <span className=""><img  className='col-2 me-0 me-md-1' src={ariConditionIcons[title]} alt="Internet connection is poor" /> 
        </span>{title}</div>
    <div className="title col-6">{value}</div>
  </div>

  )
}

