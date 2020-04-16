import React from 'react';

const Recipe = ({title, calories, img, ingredients}) => {
  return ( 
    <div className="Recipe">
      <h3>{title}</h3>
      <p className="Highlight">{calories} calories</p>
      <img src={img} alt={title} />
      <h4>Ingredients:</h4>
      {ingredients.map((para, index) => (
        <p key={index}>{para.text}</p>
      ))}
    </div>
   );
}
 
export default Recipe;