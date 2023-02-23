import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";

const App: React.FC = () => {
  return (
    <section className="">
      <Navbar />
      <div className="bg-lightgreenbg px-10">
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
