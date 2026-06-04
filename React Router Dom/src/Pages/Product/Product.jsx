import React from "react";
import { Link, Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom:"20px",
          marginTop:"20px"
        }}
      >
        <Link
          style={{
            backgroundColor: "#1976d2",
            textDecoration: "none",
            fontSize: "1.3rem",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
          to="/product/men"
        >
          Men
        </Link>
        <Link
          style={{
            backgroundColor: "#1976d2",
            textDecoration: "none",
            fontSize: "1.3rem",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
          to="/product/women"
        >
          Women
        </Link>
        <Link
          style={{
            backgroundColor: "#1976d2",
            textDecoration: "none",
            fontSize: "1.3rem",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
          to="/product/kids"
        >
          Kids
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
