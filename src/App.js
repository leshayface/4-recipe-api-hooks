import React, { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';
import SearchForm from './Components/SearchForm'
import styled from 'styled-components';


const AppContainer = styled.div`
  align-items: center;
  background: linear-gradient(to right, #ff512f, #f09819);
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;

  @media only screen and (min-width: 320px) {
    padding: 40px;
  }
`;

const Recipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

function App() {
  const APP_ID = "b0347ef9";
  const API_KEY = "9e9aa9b1e6c1c3cf6860bc7bd8389e94";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("salad");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    search === "" && setSearchValue("salad");
  }

  return (
    <AppContainer>
      <h1>RECIPE APP</h1>
      <SearchForm search={search} updateSearch={updateSearch} updateSearchValue={updateSearchValue}/>
      <Recipes>
        {recipes.map((recipe, index) => (
          <Recipe
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={index}
          />
        ))}
      </Recipes>
    </AppContainer>
  );
}

export default App;
