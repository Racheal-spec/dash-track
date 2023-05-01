import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import WaitingAnimation from "../../components/WaitingAnimation";
import ApiContext from "../../contexts/ApiContext";
import ResultPage from "../ResultPage";
import undraw from "../../assets/undraw.png";

const Report: React.FC = () => {
  const { progress, data, resError } = useContext(ApiContext);

  return (
    <section className="min-h-[100vh]">
      <div>
        {progress === 100 ? (
          <>
            {resError?.data.error.code === 500 ? (
              <div className="flex flex-col items-center">
                <img className="w-2/4" src={undraw} alt="error 500" />
                <p className="text-center dark:text-textDark">
                  {resError.data.error.message}
                </p>
              </div>
            ) : (
              <div>
                <ResultPage />
              </div>
            )}
          </>
        ) : progress === 0 ? (
          <div className="flex items-center flex-col pt-40">
            <div className="w-52">
              <WaitingAnimation />
            </div>
            <div className="text-center py-4">
              <p className="text-2xl dark:text-textDark">LOADING...</p>
              <p className="text-sm dark:text-textDark">
                We are preparing your result, PLEASE WAIT!
              </p>
            </div>
          </div>
        ) : (
          <ProgressBar percent={`${progress}%`} />
        )}
      </div>
    </section>
  );
};

export default Report;
