import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Footer from "./components/Footer";
import ApiContext from "./contexts/ApiContext";
import Report from "./pages/Report";

const App: React.FC = () => {
  const { mainurl } = useContext(ApiContext);
  return (
    <section className="bg-offwhite">
      <Navbar />
      <div className=" px-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
};

export default App;
