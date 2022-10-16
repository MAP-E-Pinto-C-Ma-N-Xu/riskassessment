import { BrowserRouter, Route, Routes } from "react-router-dom";

import BasicPrediction from "../views/BasicPrediction";
import Configure from "../views/Configure";
import Homepage from "../views/Homepage";
import Landing from "../views/Landing";
import Register from "../views/Register";
import Result from "../views/Result";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/basic-prediction" element={<BasicPrediction />} />
        <Route path="/configure" element={<Configure />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
