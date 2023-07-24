import React from "react";

export const Header = ({title,subtitle,children}) => {

  return (
    <div className="d-flex flex-column justify-content-center ">
    <div className="header">{title}</div>
    {subtitle&& <div className="subheader">{subtitle}</div>}
      <div className="d-flex flex-column flex-md-row flex-md-wrap justify-content-between col-12 title mb-4 mt-2 align-items-center justify-content-center ">
        {children}
      
    </div>
    </div>
  );
};
