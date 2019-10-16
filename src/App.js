// Note > App is parent of Travels, which is parent of Travel

import React, { Component } from "react";
import logo from './logo.svg';
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.work
    };
  } 
  handleClick = () => {
    this.setState({work: !this.state.work})
  } 
  render() {
    // On btn click, change logo className. When true=0deg and false=30deg
    const working = this.state.work ? 'App-logo': 'App-logo-stop';
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <button
          className="work-btn"
          onClick={this.handleClick}
        >
          Click me
        </button>
        <Travels />
      </div>
    );
  }
}

export default App;








/* From React 2

import React, { Component } from "react";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels />
      </div>
    );
  }
}

export default App;

*/

/* From React 1

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

*/
