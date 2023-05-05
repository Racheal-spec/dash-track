import React, { useContext } from "react";
import Button from "../../uikits/Button";
import ImageCard from "../../components/ImageCard";
import Input from "../../components/Input";
import ApiContext from "../../contexts/ApiContext";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";

const Home: React.FC = () => {
  const { handleSend, isValidate } = useContext(ApiContext);
  return (
    <section className="">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-5xl max-sm:text-3xl font-bold dark:text-offwhite">
          Test. Analyse . Result
        </h2>
        <p className="py-8 text-sm text-center w-2/4 max-sm:w-11/12 dark:text-textDark">
          The overall report and the data set are intended to be shared in two
          tables: a table of performance and a table of traffic. All of the
          columns are listed in one column (in the order in which they were
          first determined).
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-3/4">
            <Input />
          </div>
          <div className="w-24 max-sm:w-17 mx-4">
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
          <ImageCard img={ss1} />
        </div>
        <div className="mr-10 max-sm:mr-0">
          {" "}
          <ImageCard img={ss2} />
        </div>
        <div className="">
          {" "}
          <ImageCard img={ss3} />
        </div>
      </div>
    </section>
  );
};

export default Home;
