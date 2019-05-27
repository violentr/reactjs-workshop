import React, {Fragment} from 'react'
import Layout from '~/src/components/Layout.js'
import {BrowserRouter as Router, matchPath} from 'react-router-dom'
import ProductContainer from '~/src/containers/ProductContainer.js'
import {Provider} from 'react-redux'
import store from '~/src/store'
import routes from '~/src/routes/index.js'
import {parse} from 'qs'
import prepareData from '~/src/routes/prepareData.js'
import DevTools from '~/src/containers/DevTools.js'
import {render} from 'react-dom'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

function historyCb(location, action='PUSH'){
  const state = {params: {}, query: {}, routes: []}
  routes.some((route) => {
    const match = matchPath(location.pathname, route)
    if (match){
      state.routes.push(route)
      Object.assign(state.params, match.params)
      Object.assign(state.query, parse(location.search.substr(1)))
    }
    return match
  })
  prepareData(store, state)
}

history.listen(historyCb)
historyCb(window.location)


const App = () => (
  <Fragment>
    <Provider store={store}>
      <Router>
        <ProductContainer>
          <Layout />
        </ProductContainer>
      </Router>
    </Provider>
  </Fragment>
)
render(<DevTools store={store} />, document.getElementById('devtools'))

export default App;
