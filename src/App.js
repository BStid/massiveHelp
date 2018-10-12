import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      userInput: ""
    };
    this.getMonsters = this.getMonsters.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.newMonster = this.newMonster.bind(this);
  }
  getMonsters() {
    axios.get("http://localhost:3002/api/monsters").then(response => {
      this.setState({ monsters: response.data });
    });
  }
  handleInput(e) {
    this.setState({ userInput: e.target.value });
  }
  newMonster() {
    axios
      .post(`http://localhost:3002/api/monsters?name=${this.state.userInput}`)
      .then(response => {
        this.setState({ monsters: response.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.userInput);
    return (
      <div className="App">
        <h1>Test</h1>
        <button onClick={this.getMonsters}>Get Monsters</button>
        {this.state.monsters.map((value, index) => {
          return <h1 key={index}>{value.name}</h1>;
        })}
        <input placeholder="Monster name here" onChange={this.handleInput} />
        <button onClick={this.newMonster}>Submit</button>
      </div>
    );
  }
}

export default App;
