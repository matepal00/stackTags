import { styled } from "@mui/material";

export const ErrorContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  padding: "1rem",
  margin: "1rem",
  backgroundColor: "#f8d7da",
  border: "1px solid #f5c6cb",
  borderRadius: "4px",
  marginBottom: "20px",
});

export const ErrorText = styled("p")({
  fontSize: "1rem",
  fontWeight: 600,
  color: "#721c24",
  textAlign: "center",
});
