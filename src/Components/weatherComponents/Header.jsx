import React from "react";

export const Header = ({title,children}) => {

  return (
    <div className="d-flex flex-column justify-content-center ">
    <div className="header">{title}</div>
      <div className="d-flex flex-column flex-md-row  justify-content-between col-12 title mb-4 mt-2 align-items-center justify-content-center ">
        {children}
      
    </div>
    </div>
  );
};
