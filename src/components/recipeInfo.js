import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const RecipeInfo = ({ categories }) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Grid container display="flex" justifyContent="center" mt={2} pb={4}>
      {categories &&
        categories?.map((item) => (
          <>
            <>
              <Grid
                item
                key={item?.idMeal}
                m={2}
                p={1}
                sx={{
                  background: "#191970",
                  borderRadius: "8px",
                  width: "350px",
                }}
              >
                <Box sx={{ justifyContent: "center", display: "flex" }}>
                  <img
                    style={{ width: "300px", cursor: "pointer" }}
                    src={
                      item.strCategoryThumb
                        ? item.strCategoryThumb
                        : item.strMealThumb
                    }
                    alt="category"
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#e6d2aa",
                    fontWeight: "200",
                    textAlign: "center",
                  }}
                  pt={1}
                >
                  Meal: {item.strMeal}
                </Typography>
                <Typography
                  sx={{
                    color: "#e6d2aa",
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                  pt={1}
                >
                  Category: {item.strCategory}
                </Typography>
                <Typography
                  sx={{
                    color: "#e6d2aa",
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                  pt={1}
                >
                  Area: {item.strArea}
                </Typography>
              </Grid>
              <Grid item pl={3} pr={3} mt={2}>
                <Typography
                  sx={{
                    color: "#e6d2aa",
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Ingredients
                </Typography>
                {a?.map((a) => (
                  <Typography
                    sx={{
                      color: "#FA9494",
                      fontWeight: "400",
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                  >
                    {item[`strIngredient${a}`]} - {item[`strMeasure${a}`]}
                  </Typography>
                ))}
              </Grid>
            </>
            <Grid
              item
              justifyContent="center"
              mb={5}
              p={2}
              sx={{ width: "65%", border: "1px solid white" }}
            >
              <Typography
                sx={{
                  color: "#e6d2aa",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Instructions
              </Typography>
              {item.strSource && (
                <a
                  href={item.strSource}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      color: "#F29393",
                      fontWeight: "300",
                      textDecoration: "none",
                    }}
                  >
                    Source: {item.strSource}
                  </Typography>
                </a>
              )}
              <Typography
                sx={{
                  color: "#E38B29",
                  fontWeight: "400",
                  textAlign: "left",
                  textTransform: "capitalize",
                }}
              >
                {item.strInstructions}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              mb={5}
              p={2}
              sx={{ width: "100%" }}
            >
              <iframe
                width="420"
                height="315"
                src={item.strYoutube}
                title="YouTube video player"
                frameborder="0"
              ></iframe>
            </Grid>
          </>
        ))}
    </Grid>
  );
};
export default RecipeInfo;
