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
    <section className="py-20">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-5xl font-bold">Test. Analyse . Result</h2>
        <p className="py-8 text-sm text-center w-2/4">
          The overall report and the data set are intended to be shared in two
          tables: a table of performance and a table of traffic. All of the
          columns are listed in one column (in the order in which they were
          first determined).
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <Input />
        </div>
        <div className="w-24 mx-4">
          <Button onClick={handleSend} title="Start test" />
        </div>
      </div>
      <div className="">
        <p className="text-invalid">{isValidate ? "" : "Enter a valid URL"}</p>
      </div>
      <div className="flex justify-between py-16">
        <div className="mr-10 ">
          {" "}
          <ImageCard img={ss1} />
        </div>
        <div className="mr-10">
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
