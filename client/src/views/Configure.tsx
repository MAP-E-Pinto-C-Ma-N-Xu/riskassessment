import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import { IAttributes } from "../models/Attributes";

const Configure = () => {
  return (
    <div>
      <Header />

      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,

          m: 5,
          px: 5,
          pt: 2,
          pb: 6,

          minWidth: 400,

          width: "40%",
        }}
      >
        <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
          <InputLabel id="demo-simple-select-label">Field</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            displayEmpty
            value={""}
            onChange={(event: SelectChangeEvent) => {}}
          >
            <MenuItem value={0}>Education</MenuItem>
            <MenuItem value={1}>Government</MenuItem>
            <MenuItem value={2}>Business</MenuItem>
            <MenuItem value={3}>Health</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Configure;
