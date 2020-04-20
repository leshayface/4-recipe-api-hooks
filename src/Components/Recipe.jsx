import React from 'react';
import styled from 'styled-components'

const RecipeContainer = styled.div`
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Calories = styled.p `
  color: brown;
  font-size: 12px;
`;

const Recipe = ({title, calories, img, ingredients}) => {
  return ( 
    <RecipeContainer>
      <h3>{title}</h3>
      <Calories>{calories} calories</Calories>
      <img src={img} alt={title} />
      <h4>Ingredients:</h4>
      {ingredients.map((para, index) => (
        <p key={index}>{para.text}</p>
      ))}
    </RecipeContainer>
   );
}
 
export default Recipe;