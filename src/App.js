import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BugerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout'
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders'

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  render() {
    return (
      <div>
        <Layout>
         <Switch>
           <Route path="/checkout" component={Checkout}/>
           <Route path="/orders" component={Orders}/>
           <Route path="/" exact component={BurgerBuilder}/>
         </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
