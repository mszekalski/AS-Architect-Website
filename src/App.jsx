import React, { Component } from "react";

import "./App.css";
import SideBarContainer from "./frontend/components/sidebar/sidebar_container.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarContainer />
      </div>
    );
  }
}

export default App;
