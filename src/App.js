import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World and you!</h1>
      </div>
    )
  }
}

export default hot(module)(App)
