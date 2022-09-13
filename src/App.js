import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Homepage from "./components/homePage";
import NavBar from "./components/navBar";
import Random from "./components/random";
import Recipies from "./components/recipes";
import RecipeDetails from "./components/recipeDetails";
import RecipeTypes from "./components/recipeTypes";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/categories" element={<Recipies />} />
          <Route exact path="/categories/:id" element={<RecipeTypes />} />
          <Route exact path="/categories/:id/:id" element={<RecipeDetails />} />
          <Route exact path="/random" element={<Random />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
