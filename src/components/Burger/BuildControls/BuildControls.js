import React from "react";
import classes from "../BuildControls/BuildControls.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const control = [
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
     <p>Current price: <strong>{props.price.toFixed(2)} $</strong></p>
    {control.map((ctrl) => {
      return <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      added={()=>props.ingrediantsAdded(ctrl.type)}
      removed={()=>props.ingrediantsRemoved(ctrl.type)}
      disabled={props.disabled[ctrl.type]} />;
    })}
    <button 
    className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.ordered}>Order Now</button>
  </div>
);

export default buildControls;
