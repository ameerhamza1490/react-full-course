import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#1e456a",
        marginTop: "15px",
        padding: "15px 20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "red" }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "orange" }}
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Navbar;
