import React from "react";
import classes from "./Order.css";

const order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      amount: props.ingredients[ingredientName],
      name: ingredientName,
    });
  }
  const ingredientsOutput = ingredients.map((igKey) => {
    return (
      <span
        key={igKey.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          padding: "5px",
          border: "1px solid #ccc",
        }}
      >
        {igKey.name} ({igKey.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientsOutput}</p>
      <p>
        Price:<strong> USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
