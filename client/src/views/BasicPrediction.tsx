import Box from "@mui/material/Box";
import React from "react";
import AttributesSelection from "../components/AttributesSelection";
import Header from "../components/Header";
import { IAttributes } from "../models/Attributes";

interface BasicPredictionProps {
  attributes: IAttributes;
}

const BasicPrediction = (props: BasicPredictionProps) => {
  const [field, setField] = React.useState("0");
  const [dataStorage, setDataStorage] = React.useState("0");
  const [accessControl, setAccessControl] = React.useState("0");
  const [vunerability, setVunerability] = React.useState<string>();
  const [cyberAwareness, setCyberAwareness] = React.useState("0");
  const [itSupport, setITSupport] = React.useState("0");
  const [numberofEmployees, setNumberofEmployees] = React.useState<string>();
  const [revenue, setRevenue] = React.useState<string>();
  const [cyberInvestment, setcyberInvestment] = React.useState<string>();

  return (
    <div
      style={{
        backgroundImage: "url(/background.png)",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <Box>
        <AttributesSelection attributes={props.attributes} />
      </Box>
    </div>
  );
};

export default BasicPrediction;
