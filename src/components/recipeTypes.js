import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { v4 } from "uuid";
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";

const RecipeTypes = () => {
  const [types, setTypes] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
      .then((res) => setTypes(res?.data?.meals));
  }, [id]);
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
      {types ? (
        types?.map((item) => (
          <Grid
            item
            key={v4()}
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
              navigate(`/categories/${item.strCategory}/${item.idMeal}`);
            }}
          >
            <RecipeCard item={item} />
          </Grid>
        ))
      ) : (
        <Typography sx={{ color: "#850E35", textAlign: "center" }}>
          No RecipeTypes found! Try after some time...
        </Typography>
      )}
    </Box>
  );
};
export default RecipeTypes;
