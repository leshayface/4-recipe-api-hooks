import React, { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';
import SearchForm from './Components/SearchForm'
import styled from 'styled-components';


const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const APP_ID = "b0347ef9";
  const API_KEY = "9e9aa9b1e6c1c3cf6860bc7bd8389e94";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("salad");

  useEffect(() => {
    getRecipes();
  }, [searchValue])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const updateSearchValue = (e) => {
    e.preventDefault();
    setSearchValue(search);
  }

  return (
    <AppContainer>
      <h1>RECIPE APP</h1>
      <SearchForm search={search} updateSearch={updateSearch} updateSearchValue={updateSearchValue}/>
      {recipes.map((recipe, index) => (
        <Recipe
          title={recipe.recipe.label}
          calories={Math.round(recipe.recipe.calories)}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          key={index}
        />
      ))}
    </AppContainer>
  );
}

export default App;
