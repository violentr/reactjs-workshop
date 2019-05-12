import React, { Fragment } from 'react'
import Layout from '~/src/Layout.js'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <Fragment>
      <Router>
        <Layout />
      </Router>
  </Fragment>
)

export default App;
