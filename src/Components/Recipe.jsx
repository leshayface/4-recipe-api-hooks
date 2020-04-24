import React from 'react';
import styled from 'styled-components'

const RecipeContainer = styled.div`
  background: #f2f2f2;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 1px 4px 8px -2px rgba(0, 0, 0, 0.4);
  padding: 20px;
  margin: 32px 0;
  width: 100%;
  
  @media only screen and (min-width: 600px) {
    width: 62%;
  }

  @media only screen and (min-width: 768px) {
    width: 48%;
  }
`;

const Calories = styled.p `
  color: brown;
  font-size: 12px;
`;

const Image = styled.img`
  width: 48%;

  @media only screen and (min-width: 768px) {
    width: 70%;
    justify-content: space-around;
  }
`;

const Recipe = ({title, calories, img, ingredients}) => {
  return ( 
    <RecipeContainer>
      <h3>{title}</h3>
      <Calories>{calories} calories</Calories>
      <Image src={img} alt={title} />
      <h4>Ingredients:</h4>
      {ingredients.map((para, index) => (
        <p key={index}>{para.text}</p>
      ))}
    </RecipeContainer>
   );
}
 
export default Recipe;