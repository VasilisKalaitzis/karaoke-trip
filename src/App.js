import React, { Component } from "react";
import Routes from "./routes/index";
import "./css/App.css";
import "./css/containers.css";
import "./css/colors.css";
import "./css/frames.css";

class App extends Component {
  render() {
    return (
      <div className="App color-pallete3">
        <Routes />
      </div>
    );
  }
}

export default App;
