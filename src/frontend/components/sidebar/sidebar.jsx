import React from "react";
import { withRouter } from "react-router";
import { Route, Link, NavLink } from "react-router-dom";
import "../../../app/assets/stylesheets/sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <h1>Tony's Website</h1>
      </div>
    );
  }
}

export default withRouter(Sidebar);
