import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import { IAttributes } from "../models/Attributes";

interface AttributesSelectionProps {
  attributes: IAttributes;
}

const AttributesSelection = (props: AttributesSelectionProps) => {
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
    <Box>
      <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
        <InputLabel id="demo-simple-select-label">Field</InputLabel>

        <Select
          defaultValue={field}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field}
          onChange={(event: SelectChangeEvent) => setField(event.target.value)}
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
          value={dataStorage}
          label="Data Storage"
          onChange={(event: SelectChangeEvent) =>
            setDataStorage(event.target.value)
          }
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
          value={accessControl}
          label="Access Control"
          onChange={(event: SelectChangeEvent) =>
            setAccessControl(event.target.value)
          }
        >
          <MenuItem value={0}>No Access Control</MenuItem>
          <MenuItem value={1}>Low level</MenuItem>
          <MenuItem value={2}>Moderate level</MenuItem>
          <MenuItem value={3}>High level</MenuItem>
        </Select>
        <FormHelperText>Low means blabalblablablalblablablablla</FormHelperText>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
        <InputLabel id="demo-simple-select-label">
          Cybersecurity Awareness
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cyberAwareness}
          label="Cybersecurity Awareness"
          onChange={(event: SelectChangeEvent) =>
            setCyberAwareness(event.target.value)
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
          value={itSupport}
          label="IT Support"
          onChange={(event: SelectChangeEvent) =>
            setITSupport(event.target.value)
          }
        >
          <MenuItem value={0}>No Professional IT Support</MenuItem>
          <MenuItem value={1}>One or more IT Experts </MenuItem>
          <MenuItem value={2}>IT Security Department</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="standard-basic"
        label="Number of Employees"
        variant="standard"
        type="number"
        defaultValue="10"
        //placeholder="10,11,...,250"
        onChange={(e) => setNumberofEmployees(e.target.value)}
      />

      <TextField
        id="standard-basic"
        label="Revenue"
        variant="standard"
        type="number"
        defaultValue="1"
        //placeholder="1,2,...50"
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
        onChange={(e) => setRevenue(e.target.value)}
      />

      <TextField
        id="standard-basic"
        label="Cybersecurity Investment (%)"
        variant="standard"
        type="number"
        defaultValue="0"
        onChange={(e) => setcyberInvestment(e.target.value)}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
    </Box>
  );
};

export default AttributesSelection;
