import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RecipeInfo from "./recipeInfo";

const RecipeDetails = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setCategories(res?.data?.meals));
  }, [id]);
  return (
    <>
      {categories ? (
        <RecipeInfo categories={categories} />
      ) : (
        <Typography sx={{ color: "#850E35", textAlign: "center" }}>
          No Recipe Details found! Try after some time...
        </Typography>
      )}
    </>
  );
};
export default RecipeDetails;
