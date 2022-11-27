import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IParameters } from "../models/Parameters";

const Configure = () => {
  const defaultparameters: IParameters = {
    model: 0,
    haveVI: 0,
    haveAW: 0,
    hiddenLayers: 0,
    actFunction: 0,
    learningRate: 0,
    estimators: 0,
    depth: 0,
    split: 0,
    kernel: 0,
    regul: 0,
    gamma: 0,
  };
  const [parameters, setParameters] = useState<IParameters>(defaultparameters);

  const [model, setModel] = useState<string>("");

  const [haveVI, sethaveVI] = useState<string>("");
  const [haveAW, sethaveAW] = useState<string>("");

  const [hiddenLayers, setHiddenLayers] = useState<number>(50);
  const [actFunction, setActFunction] = useState<string>("");
  const [learningRate, setLearningRate] = useState<number>(0.1);

  const [estimators, setEstimators] = useState<number>(500);
  const [depth, setDepth] = useState<number>(10);
  const [split, setSplit] = useState<number>(2);

  const [kernel, setKernel] = useState<string>("");
  const [regul, setRegul] = useState<number>(20);
  const [gamma, setGamma] = useState<number>(1);

  const [modsuccess, setModsuccess] = useState<boolean>(false);

  const modification = async () => {
    console.log(parameters);
    axios
      .put("http://127.0.0.1:5000/modif", parameters)
      .then(function (response) {
        setModsuccess(true);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setParameters({
      model: model,
      haveVI: haveVI,
      haveAW: haveAW,
      hiddenLayers: hiddenLayers,
      actFunction: actFunction,
      learningRate: learningRate,
      estimators: estimators,
      depth: depth,
      split: split,
      kernel: kernel,
      regul: regul,
      gamma: gamma,
    });
  }, [
    model,
    haveVI,
    haveAW,
    hiddenLayers,
    actFunction,
    learningRate,
    estimators,
    depth,
    split,
    kernel,
    regul,
    gamma,
  ]);

  return (
    <div
      style={{
        backgroundImage: "url(/background.png)",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,

            m: 10,
            px: 5,
            pt: 2,
            pb: 6,

            minWidth: 400,
            minHeight: 400,

            width: "40%",
          }}
        >
          {modsuccess ? (
            <Alert
              onClose={() => {
                setModsuccess(false);
              }}
            >
              Modification success!
            </Alert>
          ) : null}
          <div>
            <FormControl variant="standard" sx={{ m: 2, width: "20rem" }}>
              <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={model}
                value={model}
                label="Neuron Network"
                onChange={(event: SelectChangeEvent) => {
                  setModel(event.target.value);
                }}
              >
                <MenuItem value={0}>Neuron Network</MenuItem>
                <MenuItem value={1}>Support Vecter Machine</MenuItem>
                <MenuItem value={2}>Random Forest</MenuItem>
              </Select>
            </FormControl>
          </div>

          <FormControl variant="standard" sx={{ m: 2, width: "20rem" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Do you know Vulnerability number
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event) => sethaveVI(event.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 2, width: "20rem" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Do you know Awareness level
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event) => sethaveAW(event.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          {String(model) === "0" ? (
            <div>
              <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
                <InputLabel id="demo-simple-select-label">
                  Activiation Function
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={actFunction}
                  label="Set Activiation function"
                  onChange={(event: SelectChangeEvent) =>
                    setActFunction(event.target.value)
                  }
                >
                  <MenuItem value={0}>relu</MenuItem>
                  <MenuItem value={1}>tanh</MenuItem>
                  <MenuItem value={2}>logistic</MenuItem>
                  <MenuItem value={3}>identity</MenuItem>
                </Select>
              </FormControl>

              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set hidden layers"
                variant="standard"
                type="number"
                defaultValue="50"
                onChange={(event) =>
                  setHiddenLayers(Number(event.target.value))
                }
              />

              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set Learning rate"
                variant="standard"
                type="number"
                defaultValue="0.3"
                onChange={(event) =>
                  setLearningRate(Number(event.target.value))
                }
              />
            </div>
          ) : null}

          {String(model) === "1" ? (
            <div>
              <FormControl variant="standard" sx={{ m: 2, width: "30ch" }}>
                <InputLabel id="demo-simple-select-label">
                  Set Kernel
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={kernel}
                  label="Set Kernel"
                  onChange={(event: SelectChangeEvent) =>
                    setKernel(event.target.value)
                  }
                >
                  <MenuItem value={0}>Linear</MenuItem>
                  <MenuItem value={1}>Poly</MenuItem>
                  <MenuItem value={2}>RBF</MenuItem>
                  <MenuItem value={3}>Sigmoid</MenuItem>
                  <MenuItem value={4}>Precomputed</MenuItem>
                </Select>
              </FormControl>

              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set Regularization"
                variant="standard"
                type="number"
                defaultValue="20"
                onChange={(event) => setRegul(Number(event.target.value))}
              />

              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set Gamma"
                variant="standard"
                type="number"
                defaultValue="1"
                onChange={(event) => setGamma(Number(event.target.value))}
              />
            </div>
          ) : null}

          {String(model) === "2" ? (
            <div>
              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set Estimator"
                variant="standard"
                type="number"
                defaultValue="500"
                onChange={(event) => setEstimators(Number(event.target.value))}
              />
              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set Depths"
                variant="standard"
                type="number"
                defaultValue="10"
                onChange={(event) => setDepth(Number(event.target.value))}
              />
              <TextField
                sx={{
                  my: 2,
                  mx: 2,
                }}
                id="standard-basic"
                label="Set Minimum samples split"
                variant="standard"
                type="number"
                defaultValue="2"
                onChange={(event) => setSplit(Number(event.target.value))}
              />
            </div>
          ) : null}
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={() => {
                modification();
              }}
            >
              Modify algorithm
            </Button>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Configure;
