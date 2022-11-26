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
import React, { useEffect, useState } from "react";
import { IAttributes } from "../models/Attributes";
import { IPredictResult } from "../models/PredictResult";
import axios from "axios";

interface AttributesSelectionProps {
  predictResult: IPredictResult;
  updateResult: (defaultResult: IPredictResult) => void;
}

const AttributesSelection = (props: AttributesSelectionProps) => {
  const defaultAttributes: IAttributes = {
    fields: 0,
    dataStorage: 0,
    accessControl: 0,
    vulnerability: 0,
    itSupport: 0,
    investment: 0,
    awareness: 0,
    employeeNumber: 0,
    revenue: 0,
  };

  const [newAttributes, setNewAttributes] =
    useState<IAttributes>(defaultAttributes);

  const [fields, setFields] = useState<string>("");
  const [dataStorage, setDataStorage] = useState<string>("");
  const [accessControl, setAccessControl] = useState<string>("");
  const [vulnerability, setVulnerability] = useState<number>(0);
  const [awareness, setAwareness] = useState<string>("");
  const [itSupport, setItSupport] = useState<string>("");
  const [employeeNumber, setEmployeeNumber] = useState<number>(10);
  const [revenue, setRevenue] = useState<number>(1);
  const [investment, setInvestment] = useState<number>(0);

  useEffect(() => {
    setNewAttributes({
      fields: fields,
      dataStorage: dataStorage,
      accessControl: accessControl,
      vulnerability: vulnerability,
      itSupport: itSupport,
      investment: investment,
      awareness: awareness,
      employeeNumber: employeeNumber,
      revenue: revenue,
    });
  }, [
    accessControl,
    awareness,
    dataStorage,
    employeeNumber,
    fields,
    investment,
    itSupport,
    revenue,
    vulnerability,
  ]);

  const threeModelPrediction = async () => {
    svmResultPrediction();
    nnResultPrediction();
    rfResultPrediction();
  };

  const svmResultPrediction = async () => {
    console.log(newAttributes);
    axios
      .post("http://127.0.0.1:5000/svm", newAttributes)
      .then(function (response) {
        props.updateResult(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const nnResultPrediction = async () => {
    console.log(newAttributes);
    axios
      .post("http://127.0.0.1:5000/nn", newAttributes)
      .then(function (response) {
        props.updateResult(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const rfResultPrediction = async () => {
    console.log(newAttributes);
    axios
      .post("http://127.0.0.1:5000/rf", newAttributes)
      .then(function (response) {
        props.updateResult(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          value={fields}
          onChange={(event: SelectChangeEvent) => {
            setFields(event.target.value);
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
          value={dataStorage}
          label="Data Storage"
          onChange={(event: SelectChangeEvent) => {
            setDataStorage(event.target.value);
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
      <Box>
        <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
          <InputLabel id="demo-simple-select-label">
            Cybersecurity Awareness
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={awareness}
            label="Cybersecurity Awareness"
            onChange={(event: SelectChangeEvent) =>
              setAwareness(event.target.value)
            }
          >
            <MenuItem value={0}>Low Awareness</MenuItem>
            <MenuItem value={1}>Moderate Awareness</MenuItem>
            <MenuItem value={2}>High Awareness</MenuItem>
            <MenuItem value={3}>Very High Awareness</MenuItem>
            <MenuItem value={-1}>I dont know</MenuItem>
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
              setItSupport(event.target.value)
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
            my: 2,
            mx: 2,
          }}
          id="standard-basic"
          label="Number of Employees"
          variant="standard"
          type="number"
          defaultValue="10"
          onChange={(event) => setEmployeeNumber(Number(event.target.value))}
        />

        <TextField
          sx={{
            my: 2,
            mx: 2,
          }}
          id="standard-basic"
          label="Vulnerability"
          variant="standard"
          type="number"
          defaultValue="0"
          helperText="set to -1 if you don't know this"
          onChange={(event) => setVulnerability(Number(event.target.value))}
        />

        <TextField
          sx={{
            my: 2,
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
          onChange={(event) => setRevenue(Number(event.target.value))}
        />

        <TextField
          sx={{
            my: 2,
            mx: 2,
          }}
          id="standard-basic"
          label="Cybersecurity Investment (%)"
          variant="standard"
          type="number"
          defaultValue="0"
          onChange={(event) => setInvestment(Number(event.target.value))}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          threeModelPrediction();
        }}
      >
        Predict
      </Button>
    </Box>
  );
};

export default AttributesSelection;
