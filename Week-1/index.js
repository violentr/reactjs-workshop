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
        <h3> Found: { countRepos(repos) } repositories</h3>
        <ul>
          {
            repos.map((repo) => (
              <li> {repo} </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
