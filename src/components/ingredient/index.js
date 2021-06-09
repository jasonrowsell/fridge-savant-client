import React from 'react';
import './index.css'; 

const Ingredient = (props) => {
  console.log("Inside ingredient", props)
  return (
    <div className="ingredient">
      <p className="ingredient-name">{props.name}</p>
    </div>
  );
};

export default Ingredient;
