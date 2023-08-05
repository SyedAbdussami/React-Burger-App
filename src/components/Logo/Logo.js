import React from 'react';
import classes from '../Logo/Logo.css'
import BurgerLogo from '../../assests/images/Burger-Logo.png';

const logo =(props)=>(
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="myBurger"/>
  </div>
);

export default logo;