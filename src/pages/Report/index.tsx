import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BorderCard from "../../components/BorderCard";
import ProgressBar from "../../components/ProgressBar";
import WaitingAnimation from "../../components/WaitingAnimation";
import ApiContext from "../../contexts/ApiContext";
import ResultPage from "../ResultPage";

const Report: React.FC = () => {
  const { progress, data, resError } = useContext(ApiContext);

  console.log(data);
  console.log(resError?.data.error.message);

  return (
    <section className="py-5">
      {/**=========Loading Screen============= */}
      <div>
        {progress === 100 ? (
          <>
            {resError?.data.error.code === 500 ? (
              <div>
                <p>{resError.data.error.message}</p>
              </div>
            ) : (
              <ResultPage />
            )}
          </>
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
