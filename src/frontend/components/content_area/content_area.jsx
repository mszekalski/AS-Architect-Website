import React from "react";
import { withRouter } from "react-router";
import { Route, Link, NavLink } from "react-router-dom";
import "../../../app/assets/stylesheets/content_area.css";
// import profile from "../../../app/assets/images/profile.jpg";

class ContentArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="content-area">
          <div className="content-area-overflow">

            <div className="content-area-inner">
              <div className="splash-div" />
              <div className="about-div" />
              <div className="services-div" />
              <div className="projects-div" />
              <div className="contact-div" />
            </div>
          </div>
        </div>

    );
  }
}

export default withRouter(ContentArea);
