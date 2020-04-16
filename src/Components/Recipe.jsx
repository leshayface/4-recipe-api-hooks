import React from 'react';

const Recipe = ({title, calories, img, ingredients}) => {
  return ( 
    <div className="Recipe">
      <h3>{title}</h3>
      <p><strong>{calories}</strong> calories</p>
      <img src={img} alt={title} />
      {ingredients.map((para, index) => (
        <p key={index}>{para.text}</p>
      ))}
    </div>
   );
}
 
export default Recipe;