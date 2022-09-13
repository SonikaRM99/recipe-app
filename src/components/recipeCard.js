import { Box, Grid, Typography } from "@mui/material";

import React from "react";

const RecipeCard = ({ item }) => {
  return (
    <Grid container display="flex" mt={2} justifyContent="space-around" pb={1}>
      {item && (
        <>
          <Box sx={{ justifyContent: "center", display: "flex" }}>
            <img
              style={{ width: "300px"}}
              src={
                item.strCategoryThumb
                  ? item.strCategoryThumb
                  : item.strMealThumb
              }
              alt="category"
            />
          </Box>
          {item.strMeal && (
            <Typography
              sx={{
                width: "100%",
                color: "#e6d2aa",
                fontWeight: "400",
                textAlign: "center",
              }}
              mt={2}
            >
              Meal: {item.strMeal}
            </Typography>
          )}
          <Typography
            sx={{
              width: "100%",
              color: "#e6d2aa",
              fontWeight: "400",
              textAlign: "center",
            }}
            mt={2}
          >
            Category: {item.strCategory}
          </Typography>
        </>
      )}
    </Grid>
  );
};
export default RecipeCard;
