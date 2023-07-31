import React from "react";

const DailyForecast = ({ children, daily }) => {
  return (
    <>
      <div
        key={daily.id + "_KEY"}
        className="d-flex flex-column flex-lg-row justify-content-center forecast-days mb-2 col-12 "
      >
        <div className="d-flex flex-column col-12 col-lg-4 week-days p-1 ">
          <div className="title col-12 col-sm-12 mt-3 ">{daily.datetime}</div>
          <div className="subtitle col-12 col-sm-12">
            <span className="me-1">
              <img
                className="col-2 me-0 me-md-1"
                src={daily.icon}
                alt="Internet connection is poor"
              />
            </span>
            {daily.weekdays}{" "}
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default DailyForecast;
