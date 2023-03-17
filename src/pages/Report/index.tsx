import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BorderCard from "../../components/BorderCard";
import ProgressBar from "../../components/ProgressBar";
import WaitingAnimation from "../../components/WaitingAnimation";
import ApiContext from "../../contexts/ApiContext";
import ResultPage from "../ResultPage";

const Report: React.FC = () => {
  const { progress, data } = useContext(ApiContext);

  const location = useLocation();
  const currentUrl = location.search.substring(5);
  const style = {
    fontWeight: "bold",
    fontSize: "1.6rem",
    color: "#1E1E1E",
    padding: "20px 0",
  };
  const styleNone = {
    display: "none",
  };

  return (
    <section className="py-5">
      <p style={progress === 100 ? styleNone : style}>Preparing Test Result</p>
      <div className="py-10">
        <div className="max-w-lg bg-lightGreen text-sm">
          <div className="flex flex-col m-0">
            <div className="flex">
              <div className="w-24 text-center bg-greenDark p-4 text-greylight">
                URL
              </div>
              <div className="p-4 text-urlColor">{currentUrl}</div>
            </div>
            <hr className="min-w-full mx-auto text-lineColor" />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="w-24 text-center bg-greenDark p-4 text-greylight">
                Date/Time
              </div>
              <div className="p-4 text-urlColor">
                {data ? data.analysisUTCTimestamp : "---"}
              </div>
            </div>
            <hr className="min-w-full mx-auto text-lineColor" />
          </div>

          <div className="flex">
            <div className="p-8 bg-greenDark text-center text-greylight">
              From
            </div>
            <div className="p-4 text-urlColor">
              {data.lighthouseResult
                ? data.lighthouseResult.environment.hostUserAgent
                : "---"}
            </div>
          </div>
        </div>
      </div>
      {/**=========Loading Screen============= */}
      <div>
        {progress === 100 ? (
          <ResultPage />
        ) : progress === 0 ? (
          <div className="flex items-center flex-col py-10">
            <div className="w-36">
              <WaitingAnimation />
            </div>
            <div className="text-center py-4">
              <p className="text-2xl">LOADING...</p>
              <p>We are preparing your result, PLEASE WAIT!</p>
            </div>
          </div>
        ) : (
          <ProgressBar percent={`${progress}%`} />
        )}
      </div>

      {/**=================Show Data Section===================== */}
    </section>
  );
};

export default Report;
