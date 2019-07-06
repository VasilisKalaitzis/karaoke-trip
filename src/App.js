import React, { Component } from "react";
import Routes from "./routes/index";

// components
import AppHeader from "./components/AppHeader";

// css

import "./css/App.css";
import "./css/containers.css";
import "./css/colors.css";
import "./css/frames.css";
import "./css/elements.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic, faUsers } from "@fortawesome/free-solid-svg-icons";

library.add(faMusic, faUsers);

class App extends Component {
  render() {
    return (
      <div className="App color-pallete3">
        {/*  header here */}
        <div className="xs-12">
          <AppHeader title={"KARAOKE TRIP"} />
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
