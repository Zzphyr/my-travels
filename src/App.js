import React, { Component } from "react";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="London"
          country="UK"
          photo="https://i.imgur.com/ddsvKtH.png"
          distance="1550"
        />
        <Travel
          destination="Toulouse"
          country="France"
          photo="https://i.imgur.com/mZZUFSL.png"
          distance="1000"
        />
      </div>
    );
  }
}

export default App;