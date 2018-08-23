import React, { Component } from "react";

import "./App.css";
import SideBarContainer from "./frontend/components/sidebar/sidebar_container.js";
import ContentAreaContainer from "./frontend/components/content_area/content_area_container.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="staging-area">
          <SideBarContainer />
          <ContentAreaContainer />
        </div>
      </div>
    );
  }
}

export default App;
