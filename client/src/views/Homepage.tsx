import Box from "@mui/material/Box";
import { useState } from "react";
import AttributesSelection from "../components/AttributesSelection";
import Header from "../components/Header";
import { IAttributes } from "../models/Attributes";

const Homepage = () => {
  const defaultAttributes: IAttributes = {
    field: 0,
    dataStorage: 0,
    accessControl: 0,
    vunerability: 0,
    cyberAwareness: 0,
    itSupport: 0,
    numberofEmployees: 0,
    revenue: 0,
    cyberInvestment: 0,
  };

  const [attributes, setAttributes] = useState<IAttributes>(defaultAttributes);

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
        <AttributesSelection
          attributes={attributes}
          changeAttributes={(updatedAttributes) =>
            setAttributes(updatedAttributes)
          }
        />
      </Box>
    </div>
  );
};

export default Homepage;
