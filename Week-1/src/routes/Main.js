import { mainPath } from '~/src/routes/helpers.js'
import MainPage from '~/src/components/views/Main/index.js'

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true
}
