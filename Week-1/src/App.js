import React, {Fragment} from 'react'
import Layout from 'components/Layout.js'
import {BrowserRouter as Router, matchPath, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from 'store'
import routes from 'routes/index.js'
import {parse} from 'qs'
import prepareData from 'routes/prepareData.js'
import DevTools from 'containers/DevTools.js'
import {render} from 'react-dom'
import {createBrowserHistory} from 'history';

const routeWithSubroutes = (route, key) => (
  <Route {...route} key={key}/>
)

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
        <Layout>
          <Switch>
            { routes.map((route, key) => routeWithSubroutes(route, key))}
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </Fragment>
)
render(<DevTools store={store} />, document.getElementById('devtools'))

export default App;
