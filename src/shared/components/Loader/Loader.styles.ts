import { styled } from "@mui/material";

export const StyledDiv = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const SpinningWheel = styled("span")({
  width: "4rem",
  height: "4rem",
  border: "0.25rem solid #FFF",
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: "rotation 1s linear infinite",
  "@keyframes rotation": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});
