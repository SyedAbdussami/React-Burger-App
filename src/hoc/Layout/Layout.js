import React, { Component } from "react";
import Aux from "../Auxilliary/Auxilliary";
import classes from "./Layout.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  showSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {   showSideDrawer: !prevState.showSideDrawer,};
    });
  };
  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.showSideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
