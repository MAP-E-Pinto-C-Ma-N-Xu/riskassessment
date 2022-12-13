import { BrowserRouter, Route, Routes } from "react-router-dom";

import BasicPrediction from "../views/Homepage";
import Configure from "../views/Configure";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicPrediction />} />
        <Route path="/prediction" element={<BasicPrediction />} />
        <Route path="/config" element={<Configure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
