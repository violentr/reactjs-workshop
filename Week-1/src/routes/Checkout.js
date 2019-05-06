import { checkoutPath } from '~/src/routes/helpers.js'
import Checkout from '~/src/components/views/Checkout/index.js'

export default {
  path: checkoutPath(),
  component: Checkout
}
