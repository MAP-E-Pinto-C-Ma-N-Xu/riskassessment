import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IAttributes } from "../models/Attributes";
import { IResult } from "../models/PredictResult";
import axios from "axios";
import InfoIcon from "@mui/icons-material/Info";

interface AttributesSelectionProps {
  updateSVMResult: (defaultResult: IResult) => void;
  updateNNResult: (defaultResult: IResult) => void;
  updateRFResult: (defaultResult: IResult) => void;
  updateModifResult: (defaultResult: IResult) => void;
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

  const [modsuccess, setModsuccess] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const [modLoading, setModLoading] = useState<boolean>(false);

  useEffect(() => {
    const modstatus = localStorage.getItem("modSuccess");
    setModsuccess(modstatus === "true");

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

  const ModifAlgPrediction = async () => {
    setModLoading(true);
    const param = JSON.parse(localStorage.getItem("modParam")!);

    axios
      .put("http://127.0.0.1:5000/modif", { param: param, attr: newAttributes })
      .then(function (response) {
        props.updateModifResult({
          result: response.data.result,
          mode: response.data.mode,
          model: response.data.model,
          active: true,
        });
        console.log(response.data);
        setModLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        props.updateSVMResult({
          result: response.data.result,
          mode: response.data.mode,
          model: response.data.model,
          active: true,
        });
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
        props.updateNNResult({
          result: response.data.result,
          mode: response.data.mode,
          model: response.data.model,
          active: true,
        });
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
        props.updateRFResult({
          result: response.data.result,
          mode: response.data.mode,
          model: response.data.model,
          active: true,
        });
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

        width: "60%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Tooltip title="More info about attributes">
          <IconButton
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
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
        <div style={{ display: "flex" }}>
          {showInfo ? (
            <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
              Cybersecurity Awareness: In which degree the employees of a
              company are knowledgeable about the dangers of cyberattacks, and
              behave according to best practices
            </Alert>
          ) : null}
          {showInfo ? (
            <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
              IT Support: measure IT specialists who help the company to take
              effective and quick measures to prevent cyberattacks.
            </Alert>
          ) : null}
        </div>
      </Box>

      <Box
        sx={{
          pt: 5,
          mb: 5,
        }}
      >
        <div>
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
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
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
        </div>
        <div style={{ display: "flex" }}>
          {showInfo ? (
            <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
              Vulnerability: The number of vulnerabilities that a company or at
              least its IT department is aware of.
            </Alert>
          ) : null}
          {showInfo ? (
            <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
              Cybersecurity Investment: Percent of their IT budget invested in
              cybersecurity.
            </Alert>
          ) : null}
        </div>
      </Box>
      <Grid container justifyContent="flex-end">
        {modsuccess ? (
          <Button
            sx={{
              my: 2,
              mx: 2,
            }}
            variant="contained"
            onClick={() => {
              ModifAlgPrediction();
            }}
          >
            {modLoading ? <CircularProgress /> : null}
            Predict using modified algorithm
          </Button>
        ) : null}

        <Button
          sx={{
            my: 2,
            mx: 2,
          }}
          variant="contained"
          onClick={() => {
            threeModelPrediction();
          }}
        >
          Predict
        </Button>
      </Grid>
    </Box>
  );
};

export default AttributesSelection;
