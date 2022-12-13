import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IParameters } from "../models/Parameters";
import InfoIcon from "@mui/icons-material/Info";

const Configure = () => {
  const defaultparameters: IParameters = {
    model: 0,
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
  const [modMissing, setModMissing] = useState<boolean>(false);

  const [showInfo, setShowInfo] = useState<boolean>(false);

  useEffect(() => {
    console.log(JSON.stringify(modsuccess));
    localStorage.setItem("modSuccess", JSON.stringify(modsuccess));
    localStorage.setItem("modParam", JSON.stringify(parameters));
  }, [modsuccess, parameters]);

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
          {modMissing ? (
            <Alert
              severity="warning"
              onClose={() => {
                setModMissing(false);
              }}
            >
              Algorithm model not selected!
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

          {String(model) === "0" ? (
            <div>
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<InfoIcon />}
                  onClick={() => {
                    setShowInfo(!showInfo);
                  }}
                >
                  More info about parameters
                </Button>
              </Box>
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
              <div style={{ display: "flex" }}>
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    Activation function is a function used in artificial neural
                    networks which outputs a small value for small inputs, and a
                    larger value if its inputs exceed a threshold.
                  </Alert>
                ) : null}
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    Hidden layers perform nonlinear transformations of the
                    inputs entered into the network. Hidden layers vary
                    depending on the function of the neural network, and
                    similarly, the layers may vary depending on their associated
                    weights.
                  </Alert>
                ) : null}
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    The learning rate is a hyperparameter that controls how much
                    to change the model in response to the estimated error each
                    time the model weights are updated.
                  </Alert>
                ) : null}
              </div>
            </div>
          ) : null}

          {String(model) === "1" ? (
            <div>
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<InfoIcon />}
                  onClick={() => {
                    setShowInfo(!showInfo);
                  }}
                >
                  More info about parameters
                </Button>
              </Box>
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

              <div style={{ display: "flex" }}>
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    The function of a kernel is to require data as input and
                    transform it into the desired form.
                  </Alert>
                ) : null}
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    The C parameter tells the SVM optimization how much you want
                    to avoid misclassifying each training example. The strength
                    of the regularization is inversely proportional to C. Must
                    be strictly positive.
                  </Alert>
                ) : null}
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    the gamma parameter defines how far the influence of a
                    single training example reaches, with low values meaning
                    ‘far’ and high values meaning ‘close’.
                  </Alert>
                ) : null}
              </div>
            </div>
          ) : null}

          {String(model) === "2" ? (
            <div>
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<InfoIcon />}
                  onClick={() => {
                    setShowInfo(!showInfo);
                  }}
                >
                  More info about parameters
                </Button>
              </Box>
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

              <div style={{ display: "flex" }}>
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    The number of trees in the forest.
                  </Alert>
                ) : null}
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    The maximum depth of the tree. If None, then nodes are
                    expanded until all leaves are pure or until all leaves
                    contain less than Minimum samples split.
                  </Alert>
                ) : null}
                {showInfo ? (
                  <Alert severity="info" sx={{ m: 2, width: "30ch" }}>
                    The minimum number of samples required to split an internal
                    node.
                  </Alert>
                ) : null}
              </div>
            </div>
          ) : null}
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={() => {
                setModMissing(false);
                setParameters({
                  model: model,
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
                if (model === "") {
                  setModMissing(true);
                } else {
                  setModsuccess(true);
                }
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
