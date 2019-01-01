import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './styles.css'

const Warning = React.lazy(() => import('./Warning'))

class App extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World and you!</h1>
        <h2 className={count > 10 ? 'warning' : ''}>Count: {count}</h2>
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
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
