import { BrowserRouter, Route, Routes } from "react-router-dom";

import BasicPrediction from "../views/Homepage";
import Configure from "../views/Configure";
import About from "../views/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicPrediction />} />
        <Route path="/prediction" element={<BasicPrediction />} />
        <Route path="/config" element={<Configure />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
