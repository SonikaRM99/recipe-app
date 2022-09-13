import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeInfo from "./recipeInfo";

const Random = () => {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setRandom(res?.data?.meals));
  }, []);
  const generateMeal = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setRandom(res?.data?.meals));
  };
  return (
    <>
      {random ? (
        <>
          <Box mt={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                background: "white",
                color: "#191970",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={generateMeal}
            >
              Generate Another Meal
            </Button>
          </Box>
          <RecipeInfo categories={random} />
        </>
      ) : (
        <Typography sx={{ color: "#850E35", textAlign: "center" }}>
          No Random Meals found! Try after some time...
        </Typography>
      )}
    </>
  );
};
export default Random;
