import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router";
import axios from "axios";
import RecipeCard from "./recipeCard";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchClick = () => {
    if (query) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => setSearch(res.data.meals));
    }
  };
  return (
    <Grid container display="grid">
      <Grid item sx={{ margin: "auto", marginTop: "20px" }}>
        <TextField
          name="search"
          placeholder="Search Recipe"
          value={query}
          onChange={handleSearchInput}
          sx={{
            color: "#191970",
            background: "#FFD8A9",
            width: "350px",
          }}
          varaint="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ClearIcon
                  onClick={() => {
                    setQuery("");
                    setSearch([]);
                  }}
                  style={{ color: "black", cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleSearchClick}
          edge="end"
          sx={{ color: "#000000", marginTop: "7px" }}
        >
          <SearchIcon />
        </IconButton>
      </Grid>
      <Box
        xs={12}
        sm={12}
        md={6}
        lg={4}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        mt={4}
        mb={10}
      >
        {search ? (
          search?.map((item) => (
            <Grid
              item
              key={item.idMeal}
              md={6}
              lg={3}
              m={1}
              p={1}
              sx={{
                background: "#191970",
                borderRadius: "8px",
                width: "350px",
                cursor: "pointer" 
              }}
              onClick={() => {
                navigate(`/categories/${item.strCategory}/${item.idMeal}`);
              }}
            >
              <RecipeCard item={item} />
            </Grid>
          ))
        ) : (
          <Typography sx={{ color: "#e6d2aa" }}>
            No meals found! Try another one...
          </Typography>
        )}
      </Box>
    </Grid>
  );
};
export default Homepage;
