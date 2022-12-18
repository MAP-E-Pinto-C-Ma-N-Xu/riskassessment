import { Alert, Box, Card, CardContent, Typography } from "@mui/material";
import { NULL } from "node-sass";
import { useEffect, useState } from "react";
import { IResult } from "../models/PredictResult";

interface ResultProps {
  svmResult: IResult;
  nnResult: IResult;
  rfResult: IResult;
  modifResult: IResult;
}
const Result = (props: ResultProps) => {
  const [existResult, setExistResult] = useState<boolean>(false);

  useEffect(() => {
    console.log(props.modifResult.active);
    console.log(props.nnResult.active);
    setExistResult(
      props.svmResult.active ||
        props.nnResult.active ||
        props.rfResult.active ||
        props.modifResult.active
    );
  }, [props.svmResult, props.rfResult, props.nnResult, props.modifResult]);

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
      {!existResult ? (
        <Alert severity="info">
          Use left panel to predict the Cybersecurity risk
        </Alert>
      ) : null}
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,

          mt: 5,
        }}
      >
        {props.svmResult.active ? (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Support Vector Machines Algorithm
              </Typography>

              <Typography variant="h6">
                Your Cyber Security Risk is
                {props.svmResult.result === 0 ? " Low" : null}
                {props.svmResult.result === 1 ? " Medium" : null}
                {props.svmResult.result === 2 ? " High" : null}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Box>

      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,

          mt: 5,
        }}
      >
        {props.nnResult.active ? (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Neural Network Algorithm
              </Typography>

              <Typography variant="h6">
                Your Cyber Security Risk is
                {props.nnResult.result === 0 ? " Low" : null}
                {props.nnResult.result === 1 ? " Medium" : null}
                {props.nnResult.result === 2 ? " High" : null}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,

          mt: 5,
        }}
      >
        {props.rfResult.active ? (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Random Forest Algorithm
              </Typography>

              <Typography variant="h6">
                Your Cyber Security Risk is
                {props.rfResult.result === 0 ? " Low" : null}
                {props.rfResult.result === 1 ? " Medium" : null}
                {props.rfResult.result === 2 ? " High" : null}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Box>

      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,

          mt: 5,
        }}
      >
        {props.modifResult.active ? (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Your modified Algorithm Result
              </Typography>

              <Typography variant="h6">
                Your Cyber Security Risk is
                {props.modifResult.result === 0 ? " Low" : null}
                {props.modifResult.result === 1 ? " Medium" : null}
                {props.modifResult.result === 2 ? " High" : null}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </Box>
    </Box>
  );
};

export default Result;
