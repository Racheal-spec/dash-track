import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import ApiContext from "./contexts/ApiContext";
import Report from "./pages/Report";

const App: React.FC = () => {
  const { mainurl } = useContext(ApiContext);
  return (
    <section className="">
      <Navbar />
      <div className="bg-lightgreenbg px-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
