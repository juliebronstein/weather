import React from 'react'
import { ariConditionIcons } from './icons'

export const AriCondition = ({title,icon,value,className}) => {
  return (
    <div className={`d-flex flex-row flex-lg-column justify-content-center col-md-6 col-lg-3 
    align-items-center justify-content-center  ${className}`}>
    <div className="me-2 me-lg-0">
      <span className={``}><img  className={`col-1 me-0 me-md-1`} src={ariConditionIcons[icon]} alt="Internet connection is poor" /> 
        </span>{title}</div>
    {value && <div className="title col-6">{value}</div>}
  </div>

  )
}

