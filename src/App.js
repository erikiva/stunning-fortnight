import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles.css";

class App extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <h1>Hello World and you!</h1>
        <h2 className={this.state.count > 10 ? "warning" : ""}>
          Count: {this.state.count}
        </h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
