import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AttributesSelection from "../components/AttributesSelection";
import Header from "../components/Header";
import Result from "../components/Result";
import { IAttributes } from "../models/Attributes";
import { IPredictResult } from "../models/PredictResult";

const Homepage = () => {
  const [predictResult, setPredictResult] = useState<IPredictResult>({
    result: 0,
    mode: "",
    model: "",
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
          predictResult={predictResult}
          updateResult={(updatedResult) => setPredictResult(updatedResult)}
        />

        <Result
          result={predictResult.result}
          mode={predictResult.mode}
          model={predictResult.model}
        ></Result>
      </Box>
    </div>
  );
};

export default Homepage;
