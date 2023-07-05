import { Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Footer from "./components/Footer";
import ApiContext from "./contexts/ApiContext";
import Report from "./pages/Report";
import ResultPage from "./pages/ResultPage";

const App: React.FC = () => {
  const { mainurl } = useContext(ApiContext);

  return (
    <section className="bg-white dark:bg-darkbg min-h-[100vh-10px] ">
      <Navbar />
      <div className="lg:px-28 max-sm:px-7 md:px-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path={`/report?url=${mainurl}`} element={<ResultPage />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
};

export default App;
