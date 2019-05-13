import { checkoutPath } from '~/src/routes/helpers.js'
import CheckoutPage from '~/src/components/views/Checkout/index.js'

export default {
  path: checkoutPath(),
  exact: true,
  component: CheckoutPage
}
