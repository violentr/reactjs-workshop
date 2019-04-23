import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import helpers from '~/src/Helper.js'

class App extends Component {
  render() {
    let { add, substract, multiply, divide } = helpers
    return (
      <div>
        Hello World!
        <p> 3 + 4 = { add(3, 4) } </p>
        <p> 5 + 3 = { substract(5, 3) }</p>
        <p> 5 * 3 = { multiply(5, 3) }</p>
        <p> 6 / 4 = { divide(6, 4) }</p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
