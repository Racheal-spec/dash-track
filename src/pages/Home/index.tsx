import React from "react";
import Button from "../../components/Button";
import ImageCard from "../../components/ImageCard";
import Input from "../../components/Input";

const Home: React.FC = () => {
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
        <div>
          {" "}
          <ImageCard />
        </div>
        <div>
          {" "}
          <ImageCard />
        </div>
        <div>
          {" "}
          <ImageCard />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="w-3/4">
          <Input />
        </div>
        <div className="w-24 mx-4">
          <Button title="Start test" />
        </div>
      </div>
    </section>
  );
};

export default Home;
