import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import fetchRepos from '~/src/Github.js'

import { countRepos } from '~/src/Helper.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { repos: []}
  }
  componentDidMount(){
    fetchRepos()
      .then((repos) => {
        this.setState({ repos })
      })
  }
  render() {
    const { repos } = this.state
    return (
      <div>
        Hello World!
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
