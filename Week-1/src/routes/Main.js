import { mainPath } from '~/src/routes/helpers.js'
import MainPage from '~/src/components/views/Main/index.js'
import {fetchProducts} from '~/src/actions/Products.js'

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true,
  prepareData: (store) => (
    store.dispatch(fetchProducts())
  )
}
