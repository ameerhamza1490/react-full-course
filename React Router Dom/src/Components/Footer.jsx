import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        backgroundColor: "#1976d2",
        width: "100%",
        bottom: "0",
        textAlign: "center",
        color: "white",
        padding:"15px 0"
      }}
    >
      <Typography variant="h5">Footer</Typography>
    </Box>
  );
};

export default Footer;
