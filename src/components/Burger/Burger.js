import React from "react";
import BurgerIngrediant from "./BurgerIngrediants/BurgerIngrediants";
import classes from "./Burger.css";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log(igKey+i);
        return <BurgerIngrediant type={igKey} key={igKey + i} />;
      });
    })
    // console.log(transformedIngredients)
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type="bread-top" />
      {/* <BurgerIngrediant type="cheese"/>
      <BurgerIngrediant type="meat"/> */}
      {transformedIngredients}
      <BurgerIngrediant type="bread-bottom" />
    </div>
  );
};

export default burger;
