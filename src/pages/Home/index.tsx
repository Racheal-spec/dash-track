import React, { useContext } from "react";
import Button from "../../uikits/Button";
import ImageCard from "../../components/ImageCard";
import Input from "../../components/Input";
import ApiContext from "../../contexts/ApiContext";

const Home: React.FC = () => {
  const { handleSend, isValidate } = useContext(ApiContext);
  return (
    <section className="py-20">
      <div className="w-2/4">
        <h2 className="text-2xl font-bold">Test. Analyse . Result</h2>
        <p className="py-4 text-sm">
          The overall report and the data set are intended to be shared in two
          tables: a table of performance and a table of traffic. All of the
          columns are listed in one column (in the order in which they were
          first determined).
        </p>
      </div>
      <div className="flex justify-between">
        <div className="mr-10">
          {" "}
          <ImageCard />
        </div>
        <div className="mr-10">
          {" "}
          <ImageCard />
        </div>
        <div>
          {" "}
          <ImageCard />
        </div>
      </div>
      <div className="flex items-center pt-10">
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
    </section>
  );
};

export default Home;
