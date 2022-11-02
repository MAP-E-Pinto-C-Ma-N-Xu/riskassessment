import React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText, InputLabel } from "@mui/material";

const BasicPrediction = () => {
  const [field, setField] = React.useState("");
  const [dataStorage, setDataStorage] = React.useState("");
  const [accessControl, setAccessControl] = React.useState("");
  const [vunerability, setVunerability] = React.useState<string>();

  return (
    <div>
      <Header />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Field</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={field}
            label="Field"
            onChange={(event: SelectChangeEvent) =>
              setField(event.target.value)
            }
          >
            <MenuItem value={0}>Education</MenuItem>
            <MenuItem value={1}>Government</MenuItem>
            <MenuItem value={2}>Business</MenuItem>
            <MenuItem value={3}>Health</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Data Storage</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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

        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
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
          <FormHelperText>
            Low means blabalblablablalblablablablla
          </FormHelperText>
        </FormControl>

        <TextField
          id="standard-basic"
          label="Vunerability"
          variant="standard"
          onChange={(value: string) => setVunerability(value)}
        />
      </Box>
    </div>
  );
};

export default BasicPrediction;
