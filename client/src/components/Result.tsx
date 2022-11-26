import { Box } from "@mui/material";

interface ResultProps {
  result: number;
  mode: string;
  model: string;
}
const Result = (props: ResultProps) => {
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
      {props.result}
      {props.mode}
      {props.model}
    </Box>
  );
};

export default Result;
