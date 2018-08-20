import React from "react";
import { withRouter } from "react-router";
import { Route, Link, NavLink } from "react-router-dom";
import "../../../app/assets/stylesheets/sidebar.css";
import profile from "../../../app/assets/images/profile.jpg";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="profile-container">
          <img src={profile} alt="Logo" className="profile-pic" />
        </div>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

export default withRouter(Sidebar);
