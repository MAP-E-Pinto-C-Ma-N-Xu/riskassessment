import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <img className="logo" src="logo.png" width="400" height="70" alt="logo" />
      <Tabs
        sx={{
          bgcolor: "whitesmoke",
          boxShadow: 0.2,
          borderRadius: 2,
          pt: 2,
        }}
        centered
      >
        <Button
          variant="text"
          onClick={() => {
            navigate("/prediction");
          }}
        >
          Prediction
        </Button>
        <Button
          variant="text"
          onClick={() => {
            navigate("/config");
          }}
        >
          Configuration
        </Button>
      </Tabs>
    </Box>
  );
};

export default Header;
