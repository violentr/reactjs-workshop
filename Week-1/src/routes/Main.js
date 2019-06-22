import { mainPath } from 'routes/helpers.js'
import MainPage from 'components/views/Main/index.js'
import {fetchProducts} from 'actions/Products.js'

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true,
  prepareData: (store) => (
    store.dispatch(fetchProducts())
  )
}
