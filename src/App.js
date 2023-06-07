import React, { Component } from "react";
import './css/App.css';
import { StyleRoot } from 'radium';
import Navigator from "./components/Navigator/Navigator"

class App extends Component {

  render() {

  return (
    <div className="App">

  <StyleRoot>
      <Navigator />
  </StyleRoot>
    </div>
  );
}
}

export default App;
