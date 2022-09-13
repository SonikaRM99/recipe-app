import { Button, Grid } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/letsDishLogo.png";

export default function NavBar({ theme, setTheme }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        backgroundColor: "orange",
        justifyContent: "space-between",
        padding: { xs: "0 10px", sm: "0 10px", md: "0 100px" },
      }}
      pt={1}
      pb={1}
    >
      <Grid item>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "100px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
      </Grid>
      <Grid item display="flex" alignItems="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#191970",
              fontWeight: "300",
              textDecoration: "none",
            }}
          >
            Home
          </Button>
        </Link>
        <Link to="/categories" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#191970",
              fontWeight: "300",
              textDecoration: "none",
            }}
          >
            Categories
          </Button>
        </Link>
        <Link to="/random" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#191970",
              fontWeight: "300",
              textDecoration: "none",
            }}
          >
            Random
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
