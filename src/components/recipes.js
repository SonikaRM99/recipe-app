import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import RecipeCard from "./recipeCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res?.data?.categories));
  }, []);
  return (
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
      {categories ? (
        categories?.map((item) => (
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
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/categories/${item.strCategory}`);
            }}
          >
            <RecipeCard item={item} />
          </Grid>
        ))
      ) : (
        <Typography sx={{ color: "#850E35", textAlign: "center" }}>
          No Categories found! Try after some time...
        </Typography>
      )}
    </Box>
  );
};
export default Categories;
