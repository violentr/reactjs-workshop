import { mainPath } from '~/src/routes/helpers.js'
import Main from '~/src/components/views/Main/index.js'

export default {
  path: mainPath(),
  component: Main,
  exact: true,
  strict: true
}
