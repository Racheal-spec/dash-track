import React, { useContext, useEffect } from "react";
import Button from "../../uikits/Button";
import ImageCard from "../../components/ImageCard";
import Input from "../../components/Input";
import ApiContext from "../../contexts/ApiContext";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";
import ss5 from "../../assets/ss5.png";
import ss6 from "../../assets/ss6.png";
import { useTheme } from "../../utils/changeTheme";

const Home: React.FC = () => {
  const { handleSend, isValidate } = useContext(ApiContext);
  const { handleMode, darkmode } = useTheme();

  return (
    <section className="py-16">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-5xl max-sm:text-2xl font-bold text-darkbg dark:text-offwhite">
          Test. Analyse . Result
        </h2>
        <p className="py-8 text-sm text-center lg:w-3/5 md:w-full max-sm:w-11/12 dark:text-textDark">
          Boost your website's performance with DashTrack, the ultimate
          monitoring tool. Gain real-time insights, actionable data, and
          proactive alerts to optimize every aspect of your site. Track key
          metrics, identify bottlenecks, and stay one step ahead of the
          competition.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center max-sm:flex-col">
          <div className="lg:w-3/4 md:w-3/4">
            <Input />
          </div>
          <div className="lg:w-24 md:w-24 max-sm:w-17 mx-4 max-sm:my-2">
            <Button
              disabled={!isValidate ? true : false}
              onClick={handleSend}
              title="Start test"
              className={
                isValidate
                  ? "px-4 py-[10px] max-sm:px-2 font-semibold hover:animate-ease cursor-pointer hover:bg-secondary hover:text-offwhite hover:scale text-black  bg-primaryColor"
                  : "bg-textPlaceholder px-4 cursor-not-allowed text-white py-2"
              }
            />
          </div>
        </div>
        <div className="mx-20 text-xs">
          <p className="text-invalid">
            {isValidate ? "" : "Enter a valid URL"}
          </p>
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col py-16 max-sm:py-12">
        <div className="mr-10 max-sm:mr-0">
          {" "}
          <ImageCard img={ss4} />
        </div>
        <div className="mr-10 max-sm:mr-0 lg:block sm:block md:hidden">
          {" "}
          <ImageCard img={ss5} />
        </div>
        <div className="">
          {" "}
          <ImageCard img={ss6} />
        </div>
      </div>
    </section>
  );
};

export default Home;
