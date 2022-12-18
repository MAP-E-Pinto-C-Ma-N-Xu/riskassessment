import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <img className="logo" src="logo.png" width="400" height="70" alt="logo" />
      <Tabs
        sx={{
          width: "100%",
          bgcolor: "whitesmoke",
          boxShadow: 0.2,
          borderRadius: 2,
          pt: 2,
        }}
      >
        <Button
          sx={{
            mx: 1,
          }}
          variant="text"
          onClick={() => {
            navigate("/prediction");
          }}
        >
          Prediction
        </Button>
        <Button
          sx={{
            mx: 1,
          }}
          variant="text"
          onClick={() => {
            navigate("/config");
          }}
        >
          Configuration
        </Button>
        <Button
          sx={{
            mx: 1,
          }}
          variant="text"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </Button>
      </Tabs>
    </Box>
  );
};

export default Header;
