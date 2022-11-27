import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AttributesSelection from "../components/AttributesSelection";
import Header from "../components/Header";
import Result from "../components/Result";
import { IResult } from "../models/PredictResult";

const Homepage = () => {
  const [svmResult, setSVMResult] = useState<IResult>({
    result: 0,
    mode: "",
    model: "",
    active: false,
  });
  const [nnResult, setNNResult] = useState<IResult>({
    result: 0,
    mode: "",
    model: "",
    active: false,
  });
  const [rfResult, setRFResult] = useState<IResult>({
    result: 0,
    mode: "",
    model: "",
    active: false,
  });

  useEffect(() => {}, []);

  return (
    <div
      style={{
        backgroundImage: "url(/background.png)",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <Box sx={{ display: "flex" }}>
        <AttributesSelection
          updateSVMResult={(svmResult) => setSVMResult(svmResult)}
          updateNNResult={(nnResult) => setNNResult(nnResult)}
          updateRFResult={(rfResult) => setRFResult(rfResult)}
        />

        <Result
          svmResult={svmResult}
          nnResult={nnResult}
          rfResult={rfResult}
        ></Result>
      </Box>
    </div>
  );
};

export default Homepage;
