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
import { IAttributes } from "../models/Attributes";

interface AttributesSelectionProps {
  attributes: IAttributes;
  changeAttributes: (defaultAttributes: IAttributes) => void;
}

const AttributesSelection = (props: AttributesSelectionProps) => {
  const [newAttributes, setNewAttributes] = useState<IAttributes>(
    props.attributes
  );

  return (
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
          onChange={(event: SelectChangeEvent) => {
            newAttributes.field = Number(event.target.value);
          }}
        >
          <MenuItem value={0}>Education</MenuItem>
          <MenuItem value={1}>Government</MenuItem>
          <MenuItem value={2}>Business</MenuItem>
          <MenuItem value={3}>Health</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
        <InputLabel id="demo-simple-select-label">Data Storage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"Local"}
          value={""}
          label="Data Storage"
          onChange={(event: SelectChangeEvent) => {
            newAttributes.dataStorage = Number(event.target.value);
          }}
        >
          <MenuItem value={0}>Outsourced Cloud</MenuItem>
          <MenuItem value={1}>Local Cloud</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
        <InputLabel id="demo-simple-select-label">Access Control</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Access Control"
          onChange={(event: SelectChangeEvent) =>
            (newAttributes.accessControl = Number(event.target.value))
          }
        >
          <MenuItem value={0}>No Access Control</MenuItem>
          <MenuItem value={1}>Low level</MenuItem>
          <MenuItem value={2}>Moderate level</MenuItem>
          <MenuItem value={3}>High level</MenuItem>
        </Select>
        <FormHelperText>Low means blabalblablablalblablablablla</FormHelperText>
      </FormControl>
      <Box>
        <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
          <InputLabel id="demo-simple-select-label">
            Cybersecurity Awareness
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Cybersecurity Awareness"
            onChange={(event: SelectChangeEvent) =>
              (newAttributes.cyberAwareness = Number(event.target.value))
            }
          >
            <MenuItem value={0}>Low Awareness</MenuItem>
            <MenuItem value={1}>Moderate Awareness</MenuItem>
            <MenuItem value={2}>High Awareness</MenuItem>
            <MenuItem value={3}>Very High Awareness</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
          <InputLabel id="demo-simple-select-label">IT Support</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="IT Support"
            onChange={(event: SelectChangeEvent) =>
              (newAttributes.itSupport = Number(event.target.value))
            }
          >
            <MenuItem value={0}>No Professional IT Support</MenuItem>
            <MenuItem value={1}>One or more IT Experts </MenuItem>
            <MenuItem value={2}>IT Security Department</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          pt: 5,
          mb: 5,
        }}
      >
        <TextField
          sx={{
            mx: 2,
          }}
          id="standard-basic"
          label="Number of Employees"
          variant="standard"
          type="number"
          defaultValue="10"
          onChange={(event) =>
            (newAttributes.numberofEmployees = Number(event.target.value))
          }
        />

        <TextField
          sx={{
            mx: 2,
          }}
          id="standard-basic"
          label="Revenue"
          variant="standard"
          type="number"
          defaultValue="1"
          //placeholder="1,2,...50"
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          onChange={(event) =>
            (newAttributes.revenue = Number(event.target.value))
          }
        />

        <TextField
          sx={{
            mx: 2,
          }}
          id="standard-basic"
          label="Cybersecurity Investment (%)"
          variant="standard"
          type="number"
          defaultValue="0"
          onChange={(event) =>
            (newAttributes.cyberInvestment = Number(event.target.value))
          }
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </Box>

      <Button variant="contained" onClick={() => {}}>
        Predict
      </Button>
    </Box>
  );
};

export default AttributesSelection;
